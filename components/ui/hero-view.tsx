"use client";
import { ShortBio, SocialMedia } from "@/types";
import { FileText,Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const HeroSection=()=>{
  const router=useRouter();

    return(
        <div className=" flex flex-col   w-full  px-0 py-0 ">
        <div className="flex flex-col gap-1  relative border-b">
          <div className=" relative border-b flex flex-col px-2 py-2  h-72">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 dark:from-background/80 dark:via-transparent dark:to-background/80" />
            <div className="absolute  z-10 inset-0 bg-gradient-to-b from-background/10 via-background/5  to-background/10 dark:from-background/30 dark:via-background/40 dark:to-background/50" />
            <Image src="/images/banner.jpg" alt="_banner" fill className="object-cover" />
            <div className=" absolute -bottom-8 left-1 rounded-full z-50   border-[3px] border-neutral-800">
              <div className=" relative   rounded-full ">
                <Image
                  src="/images/uzwal.jpg"
                  alt="uzwal"
                  width={100}
                  height={100}
                  className="rounded-full border-3 border-neutral-900 object-cover shadow-2xs"
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
                <p className="dark:text-neutral-400 text-neutral-600 text-[12px] font-mono font-semibold">
                  {" "}
                  Full Stack developer
                </p>
              </div>
               <div className="flex gap-3 items-center px-2 mr-3 py-1.5 ">
                {SocialMedia.map((social) => (
                  <div
                    key={social.lablename}
                    className=" group relative border-2 rounded-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 dark:text-neutral-400 p-1 bg-neutral-100 shadow-[inset_0_2px_4px_rgba(250,250,250,1)]
                   dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)]
                     duration-200 ease-in-out ">
                    <Link href={social.link} target="_blank">
                      {social.icon}
                    </Link>
                    <span
                      className="absolute bottom-full mb-2   left-3 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
                bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {social.lablename}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-3 ">
          <p className="text-start items-center dark:text-neutral-400 text-neutral-600 font-semibold font-mono text-sm p-2 ">
            I love creating useful and intuitive digital experiences using{" "}
            <span className=" m-0.5 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
                <g fill="none">
                  <rect width="256" height="256" fill="#007ACC" rx="60" />
                  <path
                    fill="#fff"
                    d="m56.611 128.849l-.081 10.484h33.32v94.679h23.57v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122l-.122 10.443Zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569Z"
                  />
                </g>
              </svg>
              TypeScript
            </span>
            ,
            <span className="  m-0.5 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 228">
                <path
                  fill="#00D8FF"
                  d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
                />
              </svg>
              React
            </span>
            ,
            <span className="  m-0.5 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              Next.js
            </span>
            ,
            <span className="  m-0.5 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="#8bc34a"
                  d="M16 20.003v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v-2h4v-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2Z"
                />
                <path
                  fill="#8bc34a"
                  d="m16 3.003l-12 7v14l4 2h6v-13.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v11.5H8l-2-1.034V11.15l10-5.833l10 5.833v11.703l-10 5.833l-1.745-1.022L13 29.253l3 1.75l12-7v-14Z"
                />
              </svg>
              Node.js
            </span>{" "}
            and{" "}
            <span className="  m-0.5 inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 549">
                <path
                  fill="#01EC64"
                  d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
                />
              </svg>
              MongoDB
            </span>{" "}
            with a strong focus on clean UI and interaction.
          </p>
        </div>
        <div className="border-t w-full  py-0.5">
          <div className="flex flex-col gap-1 justify-start items-start  px-1.5 py-2">
            {ShortBio.map((bio, i) => (
              <div key={i} className="flex  f gap-2 items-center  justify-start text-[12px] dark:text-neutral-400 text-neutral-600 font-semibold  ">
                <span className=" ">{bio.icons}</span>
                <p>{bio.data}</p>
              </div>
            ))}
          </div>
           </div>
         <div className="flex gap-2 items-center px-2 mr-3 py-1.5 w-full  ">
               <motion.button 
               onClick={()=>router.push("/resume")}
               whileHover={{scale:0.99}}
               className="px-4 py-2  flex items-center gap-2   cursor-pointer rounded-md font-semibold text-sm dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)] bg-neutral-100 shadow-[inset_2px_2px_4px_rgba(210,210,210,1)] hover:shadow-[inset_2px_2px_4px_rgba(180,180,180,1)]  duration-300 ease-in-out  ">
                  <FileText className="size-4" /> Resume/CV
               </motion.button>
               <motion.button whileHover={{scale:0.99}} className=" flex  gap-2 text-white dark:text-black items-center px-4 py-2 cursor-pointer rounded-md font-semibold text-sm bg-neutral-900  dark:bg-neutral-100 dark:shadow-[inset_2px_2px_4px_rgba(210,210,210,1)] shadow-[inset_0px_2px_2px_rgba(190,190,190,1)]  hover:shadow-[inset_2px_2px_4px_rgba(190,190,190,1)] duration-300 ease-in-out tracking-tight">
                <Send className="size-4" /> Get in touch
               </motion.button>
             </div>
      </div>
    )
}