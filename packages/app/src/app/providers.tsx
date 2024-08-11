'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { State } from 'wagmi';

import Web3ModalProvider from './web3modal-provider';

export interface ProvidersProps {
   children: React.ReactNode;
   themeProps?: Omit<ThemeProviderProps, 'children'>;
   initialState?: State;
}

export function Providers({ children, themeProps, initialState }: ProvidersProps) {
   const router = useRouter();

   return (
      <Web3ModalProvider initialState={initialState}>
         <NextUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
         </NextUIProvider>
      </Web3ModalProvider>
   );
}
