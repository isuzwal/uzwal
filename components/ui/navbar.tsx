'use client';

import Link from 'next/link';
import { Links } from '@/types';
import { AnimatedThemeToggler } from './animated-theme-toggler';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

export const NavBar = () => {
  const pathname = usePathname();

  const isActive = (linkPath: string) => linkPath === pathname;

  return (
    <div className="flex   sticky top-0 z-90 bg-white   dark:bg-neutral-900/30  backdrop-blur-xl  border-b-2 items-center justify-between px-2 py-2">
      <motion.div
        whileTap={{ scale: -0.98 }}
        className="  flex items-center justify-center     overflow-hidden   border-2 border-slate-200 dark:border-neutral-800 duration-300 transition-all ease-in-out   rounded-md  p-0 "
      >
        <Link href="/" className=" cursor-pointer">
          <Image
            src="/images/uzwal.jpg"
            alt="_profile_image"
            height={30}
            width={30}
            className="rounded-[4px]"
          />
        </Link>
      </motion.div>

      <div className="flex items-center gap-10 px-5 py-1.5">
        {Links.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={`cursor-pointer font-medium font-mono dark:hover:text-neutral-300 hover:text-neutral-800 ${
              isActive(link.link)
                ? 'dark:text-white text-neutral-950  '
                : 'dark:text-neutral-500 text-neutral-400 '
            }`}
          >
            <span>{link.name}</span>
          </Link>
        ))}

        <motion.div
          whileTap={{ scale: -0.9 }}
          className="group w-8 h-8 px-1.5 py-0.5 flex items-center justify-center rounded-[10px]
          bg-zinc-100 border-neutral-200 shadow-[inset_0_4px_6px_rgba(210,210,210,1)]
          hover:bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-900 
          dark:hover:bg-neutral-800 duration-300 transition-all ease-in-out
          dark:shadow-[inset_0_4px_6px_rgba(52,52,52,1)]"
        >
          <AnimatedThemeToggler className="group-hover:cursor-pointer dark:text-neutral-300 text-neutral-600 hover:-rotate-12 duration-300  transition-all ease-in-out" />
        </motion.div>
      </div>
    </div>
  );
};
