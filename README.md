# LemanRaffle 🎲

A modern, decentralized raffle platform built on the **Base** blockchain. Create transparent, provably fair raffles with instant transactions and minimal gas fees.

## ✨ Features

- **🔐 Decentralized & Trustless**: All logic runs on-chain via smart contracts. No intermediaries.
- **🎲 Provably Fair**: Winners selected randomly using blockchain-based randomness (`prevrandao`).
- **⚡ Lightning Fast**: Built on Base L2 for instant transaction finality and minimal gas fees.
- **🎨 Modern UI/UX**: Beautiful, responsive design using **Tailwind CSS 4** and **Framer Motion**.
- **🌐 Web3 Integration**: Seamless wallet connection via **Reown AppKit**.

## 🛠️ Technology Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Blockchain**: [Base Mainnet](https://base.org/)
- **Web3 Auth**: [Reown AppKit](https://reown.com/)
- **Interaction**: [Ethers.js v6](https://docs.ethers.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- An Ethereum Wallet (MetaMask, Coinbase Wallet, etc.)
- A Reown Cloud Project ID (Get it free at [cloud.reown.com](https://cloud.reown.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/lucidartdev/leman-raffle.git](https://github.com/lucidartdev/leman-raffle.git)
   cd leman-raffle
   ```
2. **Install dependencies**
   ```bash
   npm-install
   ```
 3. **Configure Environment Create a .env.local file in the root directory:**
   ```bash
   NEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here
   ```
 4. **Run Development Server**
   ```bash
   npm run dev
   ```
