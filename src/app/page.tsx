import { HeroSection } from '@/components/home/HeroSection'
import { ValueProposition } from '@/components/home/ValueProposition'
import { ALPMethodology } from '@/components/home/ALPMethodology'
import { LatestEpisodes } from '@/components/home/LatestEpisodes'
import { QuizCTA } from '@/components/home/QuizCTA'
import { EcosystemMap } from '@/components/home/EcosystemMap'
import { HostsPreview } from '@/components/home/HostsPreview'
import { PlatformLinks } from '@/components/home/PlatformLinks'
import { NewsletterSection } from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ALPMethodology />
      <LatestEpisodes />
      <QuizCTA />
      <EcosystemMap />
      <HostsPreview />
      <PlatformLinks />
      <NewsletterSection />
    </>
  )
}
