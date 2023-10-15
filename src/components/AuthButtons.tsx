'use client'

import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { ReactNode } from 'react'
import google from '~/assets/auth-google.svg'
import { Button } from './ui/button'

type SignInButtonProps = {
	provider?: string
	children?: ReactNode
}

export default function SignInButton({
	provider,
	children = 'Sign in',
}: SignInButtonProps) {
	return (
		<Button variant='default' size='sm' onClick={() => signIn(provider)}>
			{children}
		</Button>
	)
}

export function GoogleSignInButton({
	children = 'Continue with Google',
}: SignInButtonProps) {
	return (
		<Button variant='authGoogle' size='lg' onClick={() => signIn('google')}>
			<span className='flex gap-2'>
				<Image src={google} alt='google' width={20} height={20} />
				{children}
			</span>
		</Button>
	)
}

export function SignOutButton() {
	return (
		<Button variant='outline' size='sm' onClick={() => signOut()}>
			Sign out
		</Button>
	)
}
