import { Heart, ThumbsUp } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TaxiButton } from "@/components/TaxiButton"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { supabase } from "@/lib/supabase"
import { Database } from "@/integrations/supabase/types/database"
import { nanoid } from "nanoid"

type Advice = Database["public"]["Tables"]["advice"]["Row"]
type AdviceVote = Database["public"]["Tables"]["advice_votes"]["Row"]

export default function AdvicePage() {
  const [newAdvice, setNewAdvice] = useState("")
  const [advices, setAdvices] = useState<Advice[]>([])
  const [votedAdvices, setVotedAdvices] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  // Generate a unique voter ID if not exists
  const getVoterId = () => {
    let voterId = localStorage.getItem("voter-id")
    if (!voterId) {
      voterId = nanoid()
      localStorage.setItem("voter-id", voterId)
    }
    return voterId
  }

  // Fetch advice and votes on component mount
  useEffect(() => {
    const fetchAdvice = async () => {
      const { data: adviceData, error: adviceError } = await supabase
        .from("advice")
        .select("*")
        .order("votes_count", { ascending: false })

      if (adviceError) {
        console.error("Error fetching advice:", adviceError)
        return
      }

      setAdvices(adviceData || [])

      // Fetch user's votes
      const voterId = getVoterId()
      const { data: votesData } = await supabase
        .from("advice_votes")
        .select("advice_id")
        .eq("voter_id", voterId)

      if (votesData) {
        setVotedAdvices(new Set(votesData.map(vote => vote.advice_id)))
      }

      setIsLoading(false)
    }

    fetchAdvice()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAdvice.trim()) return

    const { data, error } = await supabase
      .from("advice")
      .insert([{ text: newAdvice.trim() }])
      .select()
      .single()

    if (error) {
      console.error("Error adding advice:", error)
      return
    }

    if (data) {
      setAdvices(prev => [...prev, data])
      setNewAdvice("")
    }
  }

  const handleVote = async (id: string) => {
    if (votedAdvices.has(id)) return

    const voterId = getVoterId()
    const { error } = await supabase
      .from("advice_votes")
      .insert([{ advice_id: id, voter_id: voterId }])

    if (error) {
      console.error("Error voting for advice:", error)
      return
    }

    // Update local state
    setVotedAdvices(prev => new Set(prev).add(id))
    setAdvices(prev =>
      prev.map(advice =>
        advice.id === id
          ? { ...advice, votes_count: (advice.votes_count || 0) + 1 }
          : advice
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F3FF]/30 p-4 pb-20">
      <div className="container mx-auto max-w-md pt-8">
        <div className="text-center mb-8">
          <Link to="/app">
            <Button variant="ghost" className="mb-4">
              ← Späť
            </Button>
          </Link>
          <Heart className="mx-auto text-[#9b87f5] h-8 w-8 animate-pulse mb-4" />
          <h1 className="font-serif text-3xl text-[#1A1F2C] mb-2">Svadobné rady</h1>
          <p className="font-sans text-[#4A5568]">Poraďte nám do manželstva 💑</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex space-x-2">
            <Input
              value={newAdvice}
              onChange={(e) => setNewAdvice(e.target.value)}
              placeholder="Napíšte vašu radu..."
              className="bg-white/80 border-[#9b87f5]/20"
            />
            <Button 
              type="submit"
              className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 whitespace-nowrap"
            >
              Pridať
            </Button>
          </div>
        </form>

        <div className="space-y-4">
          {isLoading ? (
            <p className="text-center text-[#4A5568]">Načítavam rady...</p>
          ) : advices.length === 0 ? (
            <p className="text-center text-[#4A5568]">Zatiaľ tu nie sú žiadne rady. Buďte prvý!</p>
          ) : (
            advices.map((advice) => (
              <Card key={advice.id} className="border-[#9b87f5]/20 bg-white/80">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start gap-4">
                    <p className="font-sans text-[#4A5568] flex-1">{advice.text}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote(advice.id)}
                      disabled={votedAdvices.has(advice.id)}
                      className={cn(
                        "flex items-center space-x-1",
                        votedAdvices.has(advice.id) && "text-[#9b87f5]"
                      )}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{advice.votes_count || 0}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      <TaxiButton />
    </div>
  )
}
