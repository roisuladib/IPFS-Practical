import {
   Navbar as NextUINavbar,
   NavbarContent,
   NavbarMenuToggle,
   NavbarBrand,
   NavbarItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { Logo } from '@/components/icons';
import { Connect } from './connect';

export const Navbar = () => {
   return (
      <NextUINavbar
         maxWidth="xl"
         position="sticky">
         <NavbarContent
            className="basis-1/5 sm:basis-full"
            justify="start">
            <NavbarBrand
               as="li"
               className="max-w-fit gap-3">
               <NextLink
                  className="flex items-center justify-start gap-1"
                  href="/">
                  <Logo />
                  <p className="font-bold text-inherit">ACME</p>
               </NextLink>
            </NavbarBrand>
            <ul className="ml-2 hidden justify-start gap-4 lg:flex">
               {siteConfig.navItems.map(item => (
                  <NavbarItem key={item.href}>
                     <NextLink
                        className={clsx(
                           linkStyles({ color: 'foreground' }),
                           'data-[active=true]:text-primary data-[active=true]:font-medium',
                        )}
                        color="foreground"
                        href={item.href}>
                        {item.label}
                     </NextLink>
                  </NavbarItem>
               ))}
            </ul>
         </NavbarContent>

         <NavbarContent
            justify="end">
            <NavbarItem>
               <ThemeSwitch />
            </NavbarItem>
            <NavbarItem>
               <Connect />
            </NavbarItem>
         </NavbarContent>
      </NextUINavbar>
   );
};
