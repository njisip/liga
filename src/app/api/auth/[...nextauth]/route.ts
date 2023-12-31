import { prisma } from '@/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
	// Use prisma
	adapter: PrismaAdapter(prisma),

	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
