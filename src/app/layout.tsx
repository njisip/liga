import AuthSessionProvider from '@/components/AuthSessionProvider'
import type { Metadata } from 'next'
import TrpcProvider from './_trpc/TrpcProvider'
import './globals.css'
import { bodyTypeface } from './typefaces'

export const metadata: Metadata = {
	title: 'Liga',
	description: 'Manage your basketball leagues',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${bodyTypeface.className} w-full`}>
				<AuthSessionProvider>
					<TrpcProvider>{children}</TrpcProvider>
				</AuthSessionProvider>
			</body>
		</html>
	)
}
