"use client"
import dynamic from "next/dynamic";

const Reusme = dynamic(() => import("@/components/ui/resume-view"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="p-4">
      <Reusme />
    </div>
  );
}
