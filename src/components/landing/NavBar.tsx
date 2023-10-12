import { logoTypeface } from '@/app/typefaces'
import SignInButton, { SignOutButton } from '@/components/AuthButtons'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '../../app/api/auth/[...nextauth]/route'

export default async function NavBar() {
	const session = await getServerSession(authOptions)

	return (
		<nav className='w-full px-2 py-4'>
			<section className='mx-auto lg:max-w-7xl flex gap-2 items-center'>
				{/* Logo */}
				<span className='flex flex-grow'>
					<Link
						href='/'
						className={`${logoTypeface.className} text-primary text-3xl flex items-center gap-2 cursor-pointer select-none`}>
						LIGA
					</Link>
				</span>

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
