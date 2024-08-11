'use client';

import { State, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createWeb3Modal } from '@web3modal/wagmi/react';

import { Children } from '@/types';
import { config, projectId } from '@/config';
import { sepolia } from 'viem/chains';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

createWeb3Modal({
   wagmiConfig: config,
   defaultChain: sepolia,
   projectId,
   enableAnalytics: true,
   enableSwaps: false
});

type Props = Children & {
   initialState?: State;
};

export default function Web3ModalProvider({ children, initialState }: Props) {
   return (
      <WagmiProvider
         config={config}
         initialState={initialState}>
         <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
         </QueryClientProvider>
      </WagmiProvider>
   );
}
