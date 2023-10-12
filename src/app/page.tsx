import HeroSection from '@/components/landing/HeroSection'
import NavBar from '@/components/landing/NavBar'
import styles from './Home.module.css'

/** The component for the landing page. */
export default async function Home() {
	return (
		<ContainerBackground>
			<NavBar />
			<HeroSection />
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
