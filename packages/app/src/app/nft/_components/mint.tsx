'use client';

import { useCallback, useEffect } from 'react';
import { parseEther } from 'viem';
import { useWriteContract } from 'wagmi';
import { deployedContracts } from '@/contracts';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';

export function Mint() {
   const { isPending, isSuccess, isError, error, writeContractAsync } = useWriteContract();

   /**
   * publicMint: Mint an NFT
   */
   const publicMint = async () => {
      console.log('Public mint!')
      try {
         const address = await writeContractAsync({ ...deployedContracts, functionName: 'mint', value: parseEther('0.01') })
         console.log('address', address)
      } catch (error) {
         console.log('error MINT', error)
      }
   };

   useEffect(() => {
      if (isSuccess) {
         toast.success('You successfully minted a LW3Punk!');
      }
      if (isError) {
         toast.error(error.message.split('.').shift() || 'Errored');
      }
   }, [isSuccess, isError]);

  return (
   <div>
      <div>Mint</div>
      <Button isLoading={isPending} onPress={publicMint}>Public Mint 🚀</Button>
   </div>
  )
}
