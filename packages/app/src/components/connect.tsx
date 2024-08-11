'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Button } from "@nextui-org/button";
import { useAccount } from "wagmi";

export function Connect() {
   const { open } = useWeb3Modal()
   const { isConnected, isConnecting } = useAccount()

   return (
      <>
         {!isConnected ? (
         <Button
            color="primary"
            isLoading={isConnecting}
            onPress={() => open()}>
               {isConnecting ? 'Connecting...' : 'Connect wallet'}
         </Button>
         ) : (
            <w3m-account-button />

         )}
      </>
   )
}
