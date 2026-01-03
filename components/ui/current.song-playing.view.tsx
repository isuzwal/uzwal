import { Song } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CurentSongsPlaying = () => {
  const [loadingCurrentSong, setCurrentSong] = useState(false);
  const [songs, setSongs] = useState<Song | null>(null);

  const GeetingSongs = async () => {
    setCurrentSong(true);
    try {
      const res = await fetch('/api/spotify/now-playing');
      const result = await res.json();
      setSongs(result);
    } catch {
      setSongs(null);
    } finally {
      setCurrentSong(false);
    }
  };

  useEffect(() => {
    GeetingSongs();
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full p-1.5">
      <h2 className=" flex gap-1 items-center text-[18px] md:text-[20px] font-semibold text-neutral-800 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 260 260"
          className="border rounded-md p-0.5 dark:text-neutral-300  text-neutral-500 border-slate-100 bg-slate-200 dark:bg-neutral-900 dark:border-neutral-800"
        >
          <path
            fill="#1ED760"
            d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
          />
        </svg>
        {songs?.isPlaying ? 'Currently Listening' : 'Last Played'}
      </h2>
      <div className="w-full flex items-center justify-between  p-1.5 dark:bg-neutral-900  dark:border-neutral-800  border border-slate-100 bg-slate-50 rounded-md ">
        <div className="flex gap-2 items-center">
          <div className="border-2 rounded-md w-10 h-10 flex justify-center items-center dark:bg-neutral-900 dark:border-neutral-800 bg-slate-100  border-slate-200">
            <Image
              src={songs?.albumImage ?? '/images/uzwal.jpg'}
              width={30}
              height={30}
              loading="lazy"
              placeholder="empty"
              alt={songs?.artists ?? 'No artist'}
              className="object- w-full h-full rounded-[6px]"
            />
          </div>
          {loadingCurrentSong ? (
            <div className="flex flex-col font-mono dark:text-neutral-100 text-neutral-600 animate-pulse">
              <p className="text-[12px] font-semibold flex items-center bg-neutral-200 dark:bg-neutral-700 rounded w-24 h-4 mb-1"></p>
              <p className="text-[10px] font-medium flex gap-1 items-center">
                <span className="bg-neutral-200 dark:bg-neutral-700 rounded-lg w-16 h-3"></span>
                <span className="bg-neutral-200 dark:bg-neutral-700 rounded-lg w-3 h-3 ml-1"></span>
              </p>
            </div>
          ) : (
            <div className="flex flex-col font-mono dark:text-neutral-100 text-neutral-600">
              <p className="text-[12px] font-semibold flex items-center">{songs?.songName}</p>
              <p className="text-[10px] font-medium flex gap-1 items-center">
                {songs?.artists}
                <Link
                  href={songs?.songUrl ?? ' '}
                  target="_blank"
                  className="dark:hover:text-neutral-400 hover:text-neutral-800 duration-300 transition-all ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M831.5 896Q752 896 696 858.5T640 768t56-90.5T832 640q31 0 64 8V269L384 371v525q0 53-56 90.5T192 1024T56 986.5T0 896t56-90.5T192 768q31 0 64 8V192q0-26 19-45t45-19L960 0q26 0 45 18.5t19 45.5v704q0 53-56.5 90.5t-136 37.5z"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          )}
        </div>
        <button
          className="flex justify-center items-center w-12 h-12 rounded-lg
           dark:bg-neutral-900 dark:border-neutral-800 border
          bg-slate-100 border-slate-200
            disabled:opacity-40
           dark:shadow-[inset_0_2px_2px_rgba(55,55,55,1),inset_0px_-1px_1px_rgba(52,52,52,1)]"
          type="button"
        >
          {songs?.isPlaying ? (
            <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9z"
                  fill="currentColor"
                />
              </g>
            </svg>
          ) : (
            <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16">
              <path
                fill-rule="evenodd"
                d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
