import { publicProcedure, router } from './trpc'

export const appRouter = router({
	greet: publicProcedure.query(() => {
		return { greeting: 'Hello World!' }
	}),
})

export type AppRouter = typeof appRouter
