import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export default function Footer() {
	return (
		<section>
			<div className='mx-auto lg:max-w-7xl flex flex-col-reverse lg:flex-row justify-between p-4 min-h-[80px] text-sm items-center'>
				<span className='opacity-80'>© 2023 Liga</span>
				<span className='flex gap-4'>
					<FooterLink href='/#features'>Features</FooterLink>
					<FooterLink href='https://github.com/njisip/liga'>Github</FooterLink>
				</span>
			</div>
		</section>
	)
}

function FooterLink({ href, children, ...props }: LinkProps & { children?: ReactNode }) {
	return (
		<Link
			href={href}
			{...props}
			className='opacity-80 hover:opacity-100 transition-opacity duration-150'>
			{children}
		</Link>
	)
}
