'use client';
import { MyPassions, ShortBio, SocialMedia } from '@/types';
import { FileText, Send, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const router = useRouter();
  const [passion, setPassion] = useState<string>('Working Hard');
  const [Isopen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setPassion(MyPassions[index].name);
      index = (index + 1) % MyPassions.length;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" relative flex flex-col  border w-full  px-0 py-0 ">
      {Isopen && (
        <div
          className="h-screen w-full bg-background/50 dark:bg-background/80 z-50  fixed inset-0 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className=" absolute right-[22%] z-50 top-20 dark:hover:text-neutral-200 duration-300 transition-all ease-in-out dark:text-neutral-400  bg-background/60  dark:bg-neutral-900 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:text-neutral-800"
          >
            <X className="size-5" />
          </button>
          <div
            className="border-[3px]  relative  max-w-[20rem] mx-auto w-full  flex justify-center items-center  bg-slate-100 dark:bg-neutral-900  rounded-[1.6rem]   border-slate-200 dark:border-neutral-700 dark:shadow-[inset_0_2px_2px_rgba(52,52,52,0.5)] z-70 p-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" mt-2  w-full flex  gap-2  flex-col justify-center  items-center ">
              <div className="relative rounded-md h-44 w-48">
                <Image
                  src="/images/uzwal.jpg"
                  alt="uzwal"
                  fill={true}
                  className="rounded-md cursor-pointer z-30 object-cover shadow-2xs transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="flex  p-1.5 flex-col  items-center  w-full justify-center">
                <p className="dark:text-neutral-400 text-neutral-600 font-semibold font-mono tracking-tight text-[11px]">
                  Hi, I’m Uzwal Gaihre. In my free time, I enjoy watching anime, playing football,
                  and taking moments to relax and recharge. These simple things help me stay
                  balanced, focused, and motivated.
                </p>

                <div className=" flex gap-3 items-center mt-1 w-full  justify-start  px-2 mr-3 py-1.5 ">
                  {SocialMedia.map((social) => (
                    <div
                      key={social.lablename}
                      className=" group relative border-2 rounded-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 dark:text-neutral-400 p-1 bg-background/70
                   dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)] shadow-[inset_0_2px_1px_rgba(210,210,210,0.9)]
                     duration-200 cursor-pointer  ease-in-out "
                    >
                      <Link href={social.link} target="_blank">
                        {social.icon}
                      </Link>
                      <span
                        className="absolute bottom-full mb-2   left-3 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
                bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                      >
                        {social.lablename}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1  relative border-b">
        <div className=" relative border-b flex flex-col px-2 py-2  h-72">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 dark:from-background/80 dark:via-transparent dark:to-background/80" />
          <div className="absolute  z-10 inset-0 bg-gradient-to-b from-background/10 via-background/5  to-background/10 dark:from-background/30 dark:via-background/40 dark:to-background/50" />
          <Image src="/images/banner.jpg" alt="_banner" fill className="object-cover" />
          <div className=" absolute -bottom-8 left-1 rounded-full z-50   border-[3px] border-neutral-800">
            <div className=" relative   rounded-full ">
              <Image
                onClick={() => setOpen((prev) => !prev)}
                src="/images/uzwal.jpg"
                alt="uzwal"
                width={100}
                height={100}
                className="rounded-full cursor-pointer  border-3 border-neutral-900 object-cover shadow-2xs grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex  flex-col w-full  items-start justify-start p-0.5 ">
          <div className="flex  justify-between  mt-6  w-full relative ">
            <div className=" flex flex-col items-start px-2 ">
              <h1 className="font-mono text-[24px] sm:text-[26px] font-semibold  text-neutral-800 dark:text-neutral-100">
                Uzwal Gaihre
              </h1>
              <p className="mb-1 border  rounded-4xl  text-[11px] px-1.5  py-0.5 flex items-center justify-center bg-slate-50 border-slate-200 shadow-[inset_0_2px_4px_rgba(220,220,220,1)] dark:text-neutral-400 dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(50,50,50,0.5)] dark:border-neutral-900 text-neutral-600  font-mono font-semibold">
                {passion}
              </p>
            </div>
            <div className=" flex gap-3 items-center px-2 mr-3 py-1.5 ">
              {SocialMedia.slice(0, 4).map((social) => (
                <div
                  key={social.lablename}
                  className=" group relative border-2 rounded-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 dark:text-neutral-400 p-1 bg-neutral-100 shadow-[inset_0_2px_4px_rgba(250,250,250,1)]
                   dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,0.9)]
                     duration-200 ease-in-out "
                >
                  <Link href={social.link} target="_blank">
                    {social.icon}
                  </Link>
                  <span
                    className="absolute bottom-full mb-2   left-3 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
              bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  >
                    {social.lablename}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <p className="text-start items-center dark:text-neutral-400 text-neutral-600 font-semibold font-mono text-sm p-2 ">
          Hi, I&apos;m{' '}
          <span className="font-mono font-bold dark:text-neutral-50 text-neutral-950">
            Uzwal Gaihre
          </span>{' '}
          , a passionate Full Stack Developer specializing in building dynamic and responsive web
          applications using{' '}
          <strong className=" dark:text-neutral-50 text-neutral-950  font-mono">Typescript</strong>,{' '}
          <strong className=" dark:text-neutral-50 text-neutral-950  font-mono">React</strong>,{' '}
          <strong className=" dark:text-neutral-50 text-neutral-950   font-mono">Prisma</strong>,{' '}
          <strong className=" dark:text-neutral-50 text-neutral-950  font-mono">Next.js</strong>,
          and <strong className=" dark:text-neutral-50 text-neutral-950  font-mono">MongoDB</strong>
          . I build everything from scratch to production.
        </p>
      </div>
      <div className="border-t w-full  py-0.5">
        <div className="flex flex-col gap-1 justify-start items-start  px-1.5 py-2">
          {ShortBio.map((bio, i) => (
            <div
              key={i}
              className="flex  f gap-2 items-center  justify-start text-[12px] dark:text-neutral-400 text-neutral-600 font-semibold  "
            >
              <span className=" ">{bio.icons}</span>
              <p>{bio.data}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center px-2  py-1.5 w-full  ">
        <motion.button
          onClick={() => router.push('/resume')}
          whileHover={{ scale: 0.99 }}
          className="px-4 py-2  flex items-center gap-2   cursor-pointer rounded-md font-semibold text-sm dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)] bg-neutral-100 shadow-[inset_2px_2px_4px_rgba(210,210,210,1)] hover:shadow-[inset_2px_2px_4px_rgba(180,180,180,1)]  duration-300 ease-in-out  "
        >
          <FileText className="size-4" /> Resume/CV
        </motion.button>
        <motion.button
          onClick={() => router.push('/touch')}
          whileHover={{ scale: 0.99 }}
          className=" flex  gap-2 text-white dark:text-black items-center px-4 py-2 cursor-pointer rounded-md font-semibold text-sm bg-neutral-900  dark:bg-neutral-100 dark:shadow-[inset_2px_2px_4px_rgba(210,210,210,1)] shadow-[inset_0px_2px_2px_rgba(190,190,190,1)]  hover:shadow-[inset_2px_2px_4px_rgba(190,190,190,1)] duration-300 ease-in-out tracking-tight"
        >
          <Send className="size-4" /> Get in touch
        </motion.button>
      </div>
    </div>
  );
};
