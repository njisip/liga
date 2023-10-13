'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from './ui/button'

type SignInButtonProps = {
	provider?: string | undefined
}

export default function SignInButton({ provider }: SignInButtonProps) {
	return (
		<Button variant='default' size='sm' onClick={() => signIn(provider)}>
			Sign in
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
