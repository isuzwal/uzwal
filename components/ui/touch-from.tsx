'use client';
import Image from 'next/image';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export const TouchForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<string | null>(null);

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      toast.success('Currently working on it !');
    } catch (err) {
      setError((err as Error).message || 'Something went wrong. Please try again later.');
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex  p-2 justify-center items-center">
      <div className="max-w-6xl w-full mx-auto border-[2.5px]  p-2 rounded-lg shadow-xs dark:border-neutral-800 border-neutral-200 ">
        <div>
          <h1 className="font-mono font-semibold   text-[16px] sm:text-[20px] lg:text-[24px]">
            Drop your ideas will build it together!
          </h1>
          <p className="text-sm font-medium  tracking-tight font-mono text-neutral-600 mt-1">
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className=" flex">
          <div className=" flex flex-col gap-2  max-w-xl flex-1 p-4 rounded-l-lg ">
            <form onSubmit={handleMessageSubmit} className="flex flex-col gap-4 mt-4 font-mono">
              <Field>
                <FieldLabel htmlFor="name" className=" text-[16px] font-semibold ">
                  Name
                </FieldLabel>
                <Input
                  placeholder="uzwal"
                  type="text"
                  id="name"
                  className=" text-neutral-600 dark:text-neutral-100 text-[14px]  font-medium "
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email" className=" text-[16px] font-semibold">
                  Email
                </FieldLabel>
                <Input
                  placeholder="isuzwal@gmail.com"
                  type="text"
                  id="email"
                  className=" text-neutral-600 dark:text-neutral-100 text-[14px]  font-medium "
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message" className=" text-[16px] font-semibold">
                  Message
                </FieldLabel>
                <Textarea
                  placeholder="Your message here"
                  id="message"
                  className="w-full p-2 border rounded-md h-32 resize-none  dark:text-neutral-100 text-neutral-600 text-[14px] font-medium font-mono"
                />
              </Field>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 font-mono flex items-center gap-2 cursor-pointer rounded-md font-semibold text-sm dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)] bg-neutral-100 shadow-[inset_2px_2px_4px_rgba(225,225,225,1)] hover:shadow-[inset_2px_2px_4px_rgba(215,215,215,1)] duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            <div></div>
            <div></div>
          </div>
          <div className="  flex-1 hidden md:block lg:block ">
            <Image
              src="/images/uzwal.jpg"
              alt="uzwal"
              width={500}
              height={500}
              className="object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
