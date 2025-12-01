"use client";
import { HeroSection } from "@/components/ui/hero-view";
import { SkillsView } from "@/components/ui/skills-view";

export default function Home() {
  return (
    <div className="font-medium font-mono min-h-screen">
     <HeroSection />
     <SkillsView />
    </div>
  );
}
