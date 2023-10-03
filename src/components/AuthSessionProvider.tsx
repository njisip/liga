'use client'

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

/** The component that make session data available to its children. */
const AuthSessionProvider = ({ children, session }: SessionProviderProps) => {
	return <SessionProvider session={session}>{children}</SessionProvider>
}
export default AuthSessionProvider
