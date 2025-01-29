-- Create advice table
create table if not exists public.advice (
    id uuid default gen_random_uuid() primary key,
    text text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    votes_count integer default 0 not null
);

-- Create votes table to track who voted for what (prevent double voting)
create table if not exists public.advice_votes (
    id uuid default gen_random_uuid() primary key,
    advice_id uuid references public.advice(id) on delete cascade not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    voter_id text not null, -- We'll use a device ID or similar to track unique voters
    unique(advice_id, voter_id) -- Prevent double voting
);

-- Create function to update votes count
create or replace function update_advice_votes_count()
returns trigger as $$
begin
    if (TG_OP = 'INSERT') then
        update public.advice
        set votes_count = votes_count + 1
        where id = NEW.advice_id;
    elsif (TG_OP = 'DELETE') then
        update public.advice
        set votes_count = votes_count - 1
        where id = OLD.advice_id;
    end if;
    return null;
end;
$$ language plpgsql security definer;

-- Create trigger to automatically update votes count
create trigger advice_votes_count_trigger
after insert or delete on public.advice_votes
for each row execute procedure update_advice_votes_count();

-- Set up RLS (Row Level Security)
alter table public.advice enable row level security;
alter table public.advice_votes enable row level security;

-- Create policies
create policy "Anyone can read advice"
    on public.advice for select
    to anon
    using (true);

create policy "Anyone can insert advice"
    on public.advice for insert
    to anon
    with check (true);

create policy "Anyone can read votes"
    on public.advice_votes for select
    to anon
    using (true);

create policy "Anyone can vote"
    on public.advice_votes for insert
    to anon
    with check (true);
