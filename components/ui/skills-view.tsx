import { Skills } from '@/types';
import { Marquee } from './marquee';
import { CurentSongsPlaying } from './current.song-playing.view';

export const SkillsView = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  border-t border-b mt-2  w-full  px-0 py-0   relative ">
      <div className="relative overflow-hidden border-r">
        <h2 className="px-2 py-0.5 mt-2 items-center text-[18px] md:text-[20px] flex gap-2 font-semibold text-neutral-800 dark:text-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 510 510"
            className="border rounded-md p-0.5 dark:text-neutral-300  text-neutral-500 border-slate-100 bg-slate-200 dark:bg-neutral-900 dark:border-neutral-800"
          >
            <path
              fill="currentColor"
              d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9c0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9c0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31z"
            />
          </svg>
          Skills
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none" />
          <Marquee pauseOnHover={true}>
            {Skills.map((skill, index) => (
              <div
                key={skill.lablename + index}
                className="  flex border max-w-[316px] w-full mx-auto dark:text-white cursor-pointer rounded-md px-2 gap-2 items-center justify-center py-1.5 
             dark:bg-neutral-900 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1),_inset_2px_-6px_6px_rgba(30,30,30,0.5)]
             bg-white border-neutral-200 shadow-[inset_0px_1px_2px_rgba(200,200,200,0.5),_inset_0px_-2px_2px_rgba(220,220,220,0.3)]
             "
              >
                <span className="">{skill.icon}</span>
                <p className="text-[12px]">{skill.skill_name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <CurentSongsPlaying />
    </div>
  );
};
