import Image from 'next/image'
import heroImage from '../../../public/assets/headerImage.svg'
import SignInButton from '../AuthButtons'

export default function HeroSection() {
	return (
		<section className='mx-auto lg:max-w-7xl my-20 px-2 lg:px-6 flex flex-col lg:flex-row items-center w-full'>
			<div className='text-center w-full lg:text-left lg:flex-grow self-center'>
				<h1 className='text-6xl lg:text-7xl font-extrabold'>
					Your <span className='text-secondary'>league</span> in
					<br />
					your hands
				</h1>
				<p className='ml-1 mt-6 mb-2'>
					Create and manage your basketball leagues.
					<br />
					<span className='font-bold text-secondary'>Sign in</span> to get started.
				</p>
				<SignInButton />
			</div>

			<div className='max-w-lg m-4'>
				<Image src={heroImage} alt='hero image' />
			</div>
		</section>
	)
}
