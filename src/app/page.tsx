
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      <SectionWrapper bgVariant="highlight" className="min-h-[60vh] flex items-center" >
        <HeroSection />
      </SectionWrapper>

      <AboutSection />
      <ExperienceSection />
    </div>
  )
}
