import { useState, useEffect, useCallback } from 'react';
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, Contract, formatEther, parseEther, type Eip1193Provider } from 'ethers';
import { RAFFLE_ADDRESS, RAFFLE_ABI } from '../config/contracts';

export interface RaffleItem {
  id: number;
  creator: string;
  price: string;      
  endTime: number;    
  isActive: boolean;
  prize: string;      
}

export const useRaffle = () => {
    const { address, isConnected } = useAppKitAccount();
    const { walletProvider } = useAppKitProvider('eip155');
    
    const [raffles, setRaffles] = useState<RaffleItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getContract = useCallback(async (withSigner = false) => {
        if (isConnected && withSigner && walletProvider) {
            const provider = new BrowserProvider(walletProvider as Eip1193Provider);
            const signer = await provider.getSigner();
            return new Contract(RAFFLE_ADDRESS, RAFFLE_ABI, signer);
        } 
        
        if (walletProvider) {
             const provider = new BrowserProvider(walletProvider as Eip1193Provider);
             return new Contract(RAFFLE_ADDRESS, RAFFLE_ABI, provider);
        }
        
        return null;
    }, [isConnected, walletProvider]);

    const fetchRaffles = useCallback(async () => {
        try {
            const contract = await getContract(false);
            if (!contract) return;

            const count = await contract.raffleCount();
            const items: RaffleItem[] = [];
            
            for (let i = Number(count); i > 0; i--) {
                const item = await contract.raffles(i);
                items.push({
                    id: Number(item.id),
                    creator: item.creator,
                    price: formatEther(item.ticketPrice),
                    endTime: Number(item.endTime),
                    isActive: item.isActive,
                    prize: formatEther(item.prizePool)
                });
            }
            setRaffles(items);
        } catch (error) {
            console.error("Error fetching raffles:", error);
        }
    }, [getContract]);

    const createRaffle = async (priceEth: string, durationMinutes: number) => {
        if (!isConnected) throw new Error("Wallet not connected");
        setLoading(true);
        try {
            const contract = await getContract(true);
            if (!contract) throw new Error("Contract not initialized");

            const priceWei = parseEther(priceEth);
            const durationSec = durationMinutes * 60;
            
            const tx = await contract.createRaffle(priceWei, durationSec);
            await tx.wait(); 
            
            await fetchRaffles();
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const buyTicket = async (raffleId: number, priceEth: string) => {
        if (!isConnected) throw new Error("Wallet not connected");
        setLoading(true);
        try {
            const contract = await getContract(true);
            if (!contract) throw new Error("Contract not initialized");

            const priceWei = parseEther(priceEth);
            
            const tx = await contract.buyTicket(raffleId, { value: priceWei });
            await tx.wait();
            
            await fetchRaffles();
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isConnected) {
            fetchRaffles();
        }
    }, [isConnected, fetchRaffles]);

    return { 
        raffles, 
        createRaffle, 
        buyTicket, 
        fetchRaffles,
        loading, 
        isConnected, 
        address 
    };
};