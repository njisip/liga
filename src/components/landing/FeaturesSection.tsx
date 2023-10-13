import { Calendar, Globe, Ungroup, Users } from 'lucide-react'
import { ReactNode } from 'react'

const iconStyle = 'mb-2 text-secondary'

const features = [
	{
		title: 'League Structure',
		description:
			"Manage the structure of your leagues whether it's a round-robin or knockout tournament.",
		icon: <Ungroup className={iconStyle} />,
	},
	{
		title: 'Teams and Players',
		description:
			'Add teams and players to your leagues and manage their records and statistics.',
		icon: <Users className={iconStyle} />,
	},
	{
		title: 'Schedule',
		description:
			'Manage the schedule of matches/games including start time, venue, and their results.',
		icon: <Calendar className={iconStyle} />,
	},
	{
		title: 'Public Site',
		description:
			"Generate a publicly available website allowing your fans to follow what's happening in your leagues.",
		icon: <Globe className={iconStyle} />,
	},
]

export default function FeaturesSection() {
	return (
		<section
			id='features'
			className='mx-auto lg:max-w-7xl pt-4 sm:px-4 2xl:px-0 flex flex-col md:flex-row gap-2 flex-shrink-0'>
			{features.map(({ title, description, icon }, index) => (
				<FeatureCard key={index} title={title} icon={icon}>
					{description}
				</FeatureCard>
			))}
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
		<div className='mx-4 md:mx-0 p-6 md:basis-1/4 rounded-md border border-foreground/10 transition-colors hover:border-foreground/30 bg-background shadow-lg'>
			{icon}
			<h2 className='font-bold text-xl mb-2'>{title}</h2>
			<p className='text-sm'>{children}</p>
		</div>
	)
}
