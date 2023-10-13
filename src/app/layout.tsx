import AuthSessionProvider from '@/components/providers/AuthSessionProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'
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
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<AuthSessionProvider>
						<TrpcProvider>{children}</TrpcProvider>
					</AuthSessionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
