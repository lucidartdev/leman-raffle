import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { base, mainnet, type AppKitNetwork } from '@reown/appkit/networks'


const projectId = '671cd31c4d444fa9597c3d0b7471ecac';

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [base, mainnet];

const metadata = {
    name: 'LemanRaffle',
    description: 'Decentralized Raffle',
    url: 'https://', 
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

export const appKit = createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    metadata,
    projectId,
    features: {
      analytics: true 
    }
  });