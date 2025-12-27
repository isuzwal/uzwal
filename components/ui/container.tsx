import { ChildrenProps } from '@/types/types';

export const MainConatiner = ({ children }: ChildrenProps) => {
  return <div className=" realtive max-w-4xl mx-auto w-full border min-h-screen  ">{children}</div>;
};
