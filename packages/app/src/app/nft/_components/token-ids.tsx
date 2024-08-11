'use client';

import { deployedContracts } from "@/contracts";
import { useMemo } from "react";
import { useReadContract } from "wagmi";

export function TokenIds() {
   const { isLoading, isFetching, isPending, data } = useReadContract({
      ...deployedContracts,
      functionName: 'tokenIds',
   });

   const loading = useMemo(() => isLoading || isFetching || isPending, [isLoading, isFetching, isPending])

   console.log('data', data)

   return (
      <div className="flex items-center justify-between gap-3">
         <div className="">TokenIds</div>
         {loading ? (
            <div className="">Loading...</div>
         ) : (
            <div className="">: {data?.toString()}</div>
         )}
      </div>
   )
}
