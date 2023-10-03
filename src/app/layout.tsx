import AuthSessionProvider from '@/components/AuthSessionProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Liga',
	description: 'Manage your basketball leagues',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthSessionProvider>{children}</AuthSessionProvider>
			</body>
		</html>
	)
}
