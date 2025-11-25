"use client";

import Link from "next/link";
import { Links } from "@/types";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { usePathname } from "next/navigation";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = (linkPath: string) => linkPath === pathname;

  const MainContainer: Variants = {
    hover_stop_vayo: {
      width: "2.5rem",
      height:"2.5rem",
      transition: {
        duration: 0.25,
      },
    },
    hover_start_vayo: {
      width: "8rem",
      transition: {
        type: "spring",
        duration: 0.35,
        stiffness: 60,
      },
    },
  };
  const Text_Variants: Variants = {
    hover_stop_vayo: {
      opacity: 0.9,
      transition: {
        duration: 0.3,
        delay: 0.35,
      },
    },
    hover_start_vayo: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.09,
      },
    },
  };
  return (
    <div className="flex   sticky top-0 z-50 bg-white   dark:bg-neutral-900/30  backdrop-blur-xl  border-b-2 items-center justify-between px-2 py-2">
      <motion.div layout
        variants={MainContainer}
        initial="hover_stop_vayo"
        animate={isHovered ? "hover_start_vayo" : "hover_stop_vayo"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="  flex items-center justify-center    overflow-hidden border bg-neutral-50 shadow-[inset_0_-3px_6px_rgb(215,215,215,0.25)_inset_0_3px_6px_rgb(215,215,215.25)]   rounded-full  dark:bg-neutral-950 dark:shadow-[inset_0_3px_3px_rgb(45,45,45,0.5)]  p-0 ">
        <Link href="/" className="font-mono cursor-pointer text-[20px]   ">
          <motion.span layout
            className="whitespace-normal "
            variants={Text_Variants}
            initial="hover_stop_vayo"
            animate={isHovered ? "hover_start_vayo" : "hover_stop_vayo"}>
            {isHovered ? "Uzwal" : "U"}
          </motion.span>
        </Link>
      </motion.div>

      <div className="flex items-center gap-10 px-5 py-1.5">
        {Links.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className={`cursor-pointer font-medium font-mono dark:hover:text-neutral-300 hover:text-neutral-800 ${
              isActive(link.link)
                ? "dark:text-white text-neutral-950  "
                : "dark:text-neutral-500 text-neutral-400 "
            }`}>
            <span>{link.name}</span>
          </Link>
        ))}

        <motion.div
          whileTap={{ scale: -0.9 }}
          className="group w-8 h-8 px-1.5 py-0.5 flex items-center justify-center rounded-[10px]
          bg-zinc-100 border-neutral-200 shadow-[inset_0_4px_6px_rgba(210,210,210,1)]
          hover:bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-900 
          dark:hover:bg-neutral-800 duration-300 transition-all ease-in-out
          dark:shadow-[inset_0_4px_6px_rgba(52,52,52,1)]">
          <AnimatedThemeToggler className="group-hover:cursor-pointer dark:text-neutral-300 text-neutral-600 hover:-rotate-12 duration-300  transition-all ease-in-out" />
        </motion.div>
      </div>
    </div>
  );
};
