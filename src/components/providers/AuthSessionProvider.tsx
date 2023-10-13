'use client'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

/** The component that make session data available to its children. */
export default function AuthSessionProvider({ children, session }: SessionProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>
}
