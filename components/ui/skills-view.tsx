import { Skills } from '@/types';
import { Marquee } from './marquee';

export const SkillsView = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  border-t border-b mt-2  w-full  px-0 py-0   relative ">
      <div className="relative overflow-hidden border-r">
        <h2 className="px-2 py-0.5 mt-2  text-[18px] md:text-[20px] font-semibold text-neutral-800 dark:text-neutral-200">
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
      <div>
        <h2 className="px-2 py-0.5 mt-2 text-[18px] md:text-[20px] font-semibold text-neutral-800 dark:text-neutral-200">
        Songs listen will working 

        </h2>
      </div>
    </div>
  );
};
