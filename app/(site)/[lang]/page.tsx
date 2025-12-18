// app/(site)/[lang]/page.tsx
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import VisionMissionSection from "../components/VisionMissionSection";
import ProblemsSection from "../components/ProblemsSection";
import SolutionsSection from "../components/SolutionsSection";
import CoreValuesSection from "../components/CoreValuesSection";
import GovernanceSection from "../components/GovernanceSection";
import ExperienceSection from "../components/ExperienceSection";

import { dictionaries } from "../dictionaries";
import type { Lang } from "../dictionaries";

type PageProps = {
  params: Promise<{ lang: Lang }>;
};

export default async function LandingPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = dictionaries[lang];

  return (
    <main>
      <Hero lang={lang} dict={dict} />
      <AboutSection dict={dict} />
      <VisionMissionSection dict={dict} />
      <ProblemsSection dict={dict} />
      <SolutionsSection dict={dict} />
      <CoreValuesSection dict={dict} />
      <GovernanceSection dict={dict} />
      <ExperienceSection dict={dict} />
    </main>
  );
}
