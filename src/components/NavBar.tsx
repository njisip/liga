import SignInButton, { SignOutButton } from '@/components/AuthButtons'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import logo from '../../public/assets/logo.svg'
import { authOptions } from '../app/api/auth/[...nextauth]/route'

export default async function Header() {
	const session = await getServerSession(authOptions)

	return (
		<nav className='w-full p-2'>
			<section className='mx-auto lg:max-w-7xl flex gap-2 items-center'>
				{/* Logo */}
				<Image src={logo} alt='logo' width={0} height={30} />
				<h3 className='flex-grow'>Liga</h3>

				{/* Auth buttons */}
				{session ? (
					<>
						<p>
							Welcome, <span className='font-bold'>{session.user?.name}</span>
						</p>
						<SignOutButton />
					</>
				) : (
					<>
						<SignInButton />
					</>
				)}
			</section>
		</nav>
	)
}
