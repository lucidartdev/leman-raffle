import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="p-8 text-center text-slate-400">
        <h1 className="text-4xl text-white font-bold mb-4">Raffle DApp</h1>
        <p>Connect your wallet to get started.</p>
      </main>
    </div>
  );
}
export default App;