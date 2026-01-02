'use client';
import { Experiences } from '@/components/ui/experiences-view';
import { HeroSection } from '@/components/ui/hero-view';
import { SkillsView } from '@/components/ui/skills-view';

export default function Home() {
  return (
    <div className=" font-mono min-h-screen">
      <HeroSection />
      <SkillsView />
      <Experiences />
    </div>
  );
}
