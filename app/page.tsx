import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PainSection from '@/components/PainSection'
import HowItWorks from '@/components/HowItWorks'
import Comparison from '@/components/Comparison'
import Testimonials from '@/components/Testimonials'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
