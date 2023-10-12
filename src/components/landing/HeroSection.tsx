import Image from 'next/image'
import heroImage from '~/assets/headerImage.svg'
import SignInButton from '../AuthButtons'

export default function HeroSection() {
	return (
		<section className='mx-auto lg:max-w-7xl md:my-12 px-2 lg:px-6 flex flex-col lg:flex-row items-center w-full'>
			<div className='text-center w-full lg:text-left lg:flex-grow self-center max-lg:mt-16'>
				<h1 className='text-6xl lg:text-7xl font-extrabold'>
					Your <span className='text-secondary'>leagues</span> in
					<br />
					your hands
				</h1>
				<p className='ml-1 my-8'>
					Create and manage your basketball leagues.
					<br />
					<span className='font-bold text-secondary'>Sign in</span> to get started.
				</p>
				<SignInButton />
			</div>

			<div className='max-w-lg mx-2 my-8 md:my-4 lg:m-0'>
				<Image src={heroImage} alt='hero image' />
			</div>
		</section>
	)
}
