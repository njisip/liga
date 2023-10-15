import FeaturesSection from '@/components/landing/FeaturesSection'
import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import NavBar from '@/components/landing/NavBar'

/** The component for the landing page. */
export default function Home() {
	return (
		<ContainerBackground>
			<NavBar />
			<HeroSection />
			<FeaturesSection />
			<Footer />
		</ContainerBackground>
	)
}

function ContainerBackground({ children }: { children: React.ReactNode }) {
	return (
		<div className='min-h-screen bg-background'>
			<div className='bg-grid-pattern'>
				<div className='bg-mesh-1'>{children}</div>
			</div>
		</div>
	)
}
