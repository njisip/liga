import { prisma } from '@/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compare } from 'bcrypt'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
	// Use prisma
	adapter: PrismaAdapter(prisma),

	// Set session strategy
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
	},

	// Configure one or more authentication providers
	providers: [
		Credentials({
			name: 'Email',
			credentials: {
				email: { type: 'email', label: 'Email' },
				password: { type: 'password', label: 'Password' },
			},
			async authorize(credentials) {
				// Check credentials
				if (!credentials?.email || !credentials?.password) return null

				// Find user
				var user = await prisma.user.findUnique({
					where: { email: credentials.email },
				})

				// Compare password
				if (!user?.password) return null
				const valid = await compare(credentials.password, user.password)
				if (valid) return user

				return null
			},
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id
			return token
		},
		async session({ session, token }) {
			if (token?.id) session.user.id = token.id as string
			return session
		},
	},

	pages: {
		signIn: '/auth/signin',
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
