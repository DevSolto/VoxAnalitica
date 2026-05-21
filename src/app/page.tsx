import Hero from '@/components/home/Hero'
import Numbers from '@/components/home/Numbers'
import ProofBlock from '@/components/home/ProofBlock'
import ServicesPreview from '@/components/home/ServicesPreview'
import AudiencePreview from '@/components/home/AudiencePreview'
import HowItWorksPreview from '@/components/home/HowItWorksPreview'
import DifferentialsPreview from '@/components/home/DifferentialsPreview'
import WhenToHire from '@/components/home/WhenToHire'
import CtaBanner from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <ProofBlock />
      <ServicesPreview />
      <AudiencePreview />
      <HowItWorksPreview />
      <DifferentialsPreview />
      <WhenToHire />
      <CtaBanner />
    </>
  )
}
