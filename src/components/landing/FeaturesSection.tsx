import { Calendar, Globe, Ungroup, Users } from 'lucide-react'
import { ReactNode } from 'react'

const iconStyle = 'mb-2 text-secondary'

export default function FeaturesSection() {
	return (
		<section
			id='features'
			className='mx-auto lg:max-w-7xl pt-4 sm:px-4 2xl:px-0 flex flex-col md:flex-row gap-2 flex-shrink-0'>
			<FeatureCard title='League Structure' icon={<Ungroup className={iconStyle} />}>
				Manage the structure of your leagues whether it's a round-robin or knockout
				tournament.
			</FeatureCard>
			<FeatureCard title='Teams and Players' icon={<Users className={iconStyle} />}>
				Add teams and players to your league and manage their records and statistics.
			</FeatureCard>
			<FeatureCard title='Schedule' icon={<Calendar className={iconStyle} />}>
				Manage the schedule of matches/games and their results.
			</FeatureCard>
			<FeatureCard title='Public Site' icon={<Globe className={iconStyle} />}>
				Generate a publicly available website allowing your fans to follow what's
				happening in your leagues.
			</FeatureCard>
		</section>
	)
}

function FeatureCard({
	icon,
	title,
	children,
}: {
	icon?: ReactNode
	title: string
	children?: ReactNode
}) {
	return (
		<div className='mx-4 md:mx-0 p-6 md:basis-1/4 rounded-md border border-foreground/10 hover:border-foreground/30 transition-colors bg-background shadow-lg'>
			{icon}
			<h2 className='font-bold text-xl mb-2'>{title}</h2>
			<p className='text-sm'>{children}</p>
		</div>
	)
}
