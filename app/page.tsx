import { CreateRaffle } from "./components/raffle/CreateRaffle";
import { RaffleList } from "./components/raffle/RaffleList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-32 pb-12">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Leman Raffle
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A decentralized, provably fair raffle platform on Base. 
          Create your own pool or win big instantly.
        </p>
      </div>

      {/* Dashboard Components */}
      <CreateRaffle />
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Live Raffles</h2>
        </div>
        <RaffleList />
      </div>
    </main>
  );
}