import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined
}

/**
 * The prisma singleton instance.
 */
export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ['query'],
	})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
