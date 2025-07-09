import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, QuizQuestion } from '@/lib/quizData';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Award, Gamepad2 } from 'lucide-react';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (currentQuestion.answers[answerIndex].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-white/70 border-[#9b87f5]/30 hover:bg-white/90';
    }
    const isCorrect = currentQuestion.answers[index].isCorrect;
    if (index === selectedAnswer) {
      return isCorrect ? 'bg-green-500/80 border-green-700 text-white' : 'bg-red-500/80 border-red-700 text-white';
    }
    if (isCorrect) {
      return 'bg-green-500/80 border-green-700 text-white';
    }
    return 'bg-white/50 border-gray-300/30 opacity-60';
  };

  if (!isStarted) {
    return (
      <div className="container mx-auto max-w-md p-4 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 text-center border border-[#9b87f5]/30"
        >
          <Gamepad2 className="mx-auto text-[#9b87f5] h-16 w-16 mb-4" />
          <h1 className="font-serif text-3xl font-medium text-[#1A1F2C]">Svadobný kvíz</h1>
          <p className="font-sans text-lg text-gray-600 mt-6 leading-relaxed">
            Myslíte si, že nás poznáte? Otestujte svoje vedomosti v našom krátkom kvíze!
            <br />
            <br />
            Keď budete mať výsledok, príďte sa nám pochváliť. Tešíme sa na vaše skóre!
          </p>
          <Button
            onClick={() => setIsStarted(true)}
            size="lg"
            className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3 mt-8"
          >
            Spustiť kvíz
          </Button>
        </motion.div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container mx-auto max-w-md p-4 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 text-center border border-[#9b87f5]/30"
        >
          <Award className="mx-auto text-[#9b87f5] h-16 w-16 mb-4" />
          <h1 className="font-serif text-3xl font-medium text-[#1A1F2C]">Kvíz dokončený!</h1>
          <p className="font-sans text-xl text-gray-600 mt-4">Vaše skóre:</p>
          <p className="font-bold text-6xl text-[#9b87f5] my-4">
            {score} / {quizQuestions.length}
          </p>
          <Button
            onClick={handleRestart}
            size="lg"
            className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3 mt-6"
          >
            Hrať znova
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-md p-4 pb-24">
      <div className="text-center mb-8">
        <Gamepad2 className="mx-auto text-[#9b87f5] h-10 w-10 mb-4" />
        <h1 className="font-serif text-4xl font-medium text-[#1A1F2C]">Svadobný kvíz</h1>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-[#9b87f5]/30"
        >
          <div className="text-center mb-6">
            <p className="font-sans text-gray-500">
              Otázka {currentQuestionIndex + 1} z {quizQuestions.length}
            </p>
            <h2 className="font-serif text-2xl font-medium text-[#1A1F2C] mt-2">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="mt-6 h-[320px]">
            <AnimatePresence mode="wait">
              {!isAnswered ? (
                <motion.div
                  key="answers"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {currentQuestion.answers.map((answer, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      variant="outline"
                      size="lg"
                      className={`w-full h-auto min-h-[4rem] text-lg font-medium text-[#1A1F2C] rounded-xl transition-all duration-300 flex items-center justify-center text-center whitespace-normal py-2 ${getButtonClass(index)}`}
                    >
                      {answer.text}
                    </Button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-center items-center h-full text-center"
                >
                  <div className="flex items-start bg-white/50 rounded-xl p-4 w-full text-left">
                    {selectedAnswer !== null && (
                      <>
                        {currentQuestion.answers[selectedAnswer].isCorrect ? (
                          <CheckCircle className="h-10 w-10 text-green-500 mr-4 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-10 w-10 text-red-500 mr-4 flex-shrink-0" />
                        )}
                        <div>
                          <h3
                            className={`font-bold text-xl ${currentQuestion.answers[selectedAnswer].isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {currentQuestion.answers[selectedAnswer].isCorrect ? 'Správne!' : 'Nesprávne!'}
                          </h3>
                          <p className="font-sans text-lg text-gray-700 mt-1">
                            {currentQuestion.answers[selectedAnswer].isCorrect
                              ? currentQuestion.feedback.correct
                              : currentQuestion.feedback.incorrect}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <Button
                    onClick={handleNext}
                    size="lg"
                    className="w-full bg-[#9b87f5] text-white hover:bg-[#8B5CF6] rounded-lg py-3 mt-5"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Ďalšia otázka' : 'Ukázať výsledky'}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
