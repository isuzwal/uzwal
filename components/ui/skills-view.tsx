import { Skills } from "@/types";

export const SkillsView = () => {
  return (
    <div className=" flex flex-col  border-t border-b mt-2  w-full  px-0 py-0 ">
      <h2 className="px-2 py-0.5 mt-2  text-xl font-semibold text-neutral-900 dark:text-neutral-200">
        Skills
      </h2>
      <div className="  grid  grid-cols-2 sm:grid-cols-5 lg:grid-cols-5  gap-2  px-2 py-2 text-[12px]">
        {Skills.map((skill) => (
          <div
            key={skill.lablename}
            className="flex border   dark:text-white cursor-pointer rounded-lg  px-3 gap-3 items-center justify-center  py-1.5 dark:bg-neutral-900 
                 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1),_inset_2px_-6px_6px_rgba(30,30,30,0.5)]
                 bg-neutral-100 border-neutral-200 shadow-[inset_0px_1px_2px_rgba(275,275,275,1),_inset_0px_-2px_2px_rgba(260,260,260,0.5)]
                 ">
            <span>{skill.icon}</span>
            <p>{skill.skill_name}</p>
          </div>
        ))}
      </div>
        <div className="border w-full">
   
        </div>
    </div>
  );
};
