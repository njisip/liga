import { GoogleSignInButton } from '@/components/AuthButtons'
import Image from 'next/image'
import logo from '~/assets/logo.svg'

export default function SignIn() {
	return (
		<div className='min-h-[100dvh] flex flex-col justify-center items-center bg-background'>
			<main className='px-6 py-12 bg-background rounded-md border border-neutral-10 gap-2 flex flex-col'>
				<header className='flex items-center gap-2 justify-center mb-2'>
					<Image src={logo} alt='logo' width={48} />
					<span className='font-bold text-xl'>Sign in</span>
				</header>
				<GoogleSignInButton />
			</main>
		</div>
	)
}
