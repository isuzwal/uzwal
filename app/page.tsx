import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  relative min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
   <AnimatedThemeToggler className="cursor-pointer right-2 top-3 absolute" />
      <span className="px-5 py-1.5 border dark:bg-neutral-950 dark:border-dashed  bg-slate-100 border-dashed dark:text-neutral-300 text-neutral-700 font-medium  ">Hello world</span>
    </div> 
  );
}
