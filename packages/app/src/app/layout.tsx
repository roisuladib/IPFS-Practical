import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { cookieToInitialState } from 'wagmi';
import { headers } from 'next/headers';

import { Providers } from './providers';

import { config } from '@/config';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
   title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
   },
   description: siteConfig.description,
   icons: {
      icon: '/favicon.ico',
   },
};

export const viewport: Viewport = {
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const initialState = cookieToInitialState(config, headers().get('cookie'));

   return (
      <html
         suppressHydrationWarning
         lang="en">
         <head />
         <body
            className={clsx('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
            <Providers
               initialState={initialState}
               themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
               <div className="relative flex h-screen flex-col">
                  <Navbar />
                  <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
                     {children}
                  </main>
                  <footer className="flex w-full items-center justify-center py-3">
                     <Link
                        isExternal
                        className="flex items-center gap-1 text-current"
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage">
                        <span className="text-default-600">Powered by</span>
                        <p className="text-primary">NextUI</p>
                     </Link>
                  </footer>
               </div>
            </Providers>
            <Toaster />
         </body>
      </html>
   );
}
