import { HeroSection } from '@/components/home/HeroSection'
import { ValueProposition } from '@/components/home/ValueProposition'
import { LatestEpisodes } from '@/components/home/LatestEpisodes'
import { QuizCTA } from '@/components/home/QuizCTA'
import { HostsPreview } from '@/components/home/HostsPreview'
import { ContentPillars } from '@/components/home/ContentPillars'
import { NewsletterSection } from '@/components/home/NewsletterSection'
import { PlatformLinks } from '@/components/home/PlatformLinks'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <LatestEpisodes />
      <QuizCTA />
      <HostsPreview />
      <ContentPillars />
      <PlatformLinks />
      <NewsletterSection />
    </>
  )
}
