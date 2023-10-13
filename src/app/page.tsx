import FeaturesSection from '@/components/landing/FeaturesSection'
import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import NavBar from '@/components/landing/NavBar'
import styles from './Home.module.css'

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
		<div className={styles.mainBackground}>
			<div className={styles.backgroundPattern}>
				<div className={styles.backgroundMesh}>{children}</div>
			</div>
		</div>
	)
}
