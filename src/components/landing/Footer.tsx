import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import logo from '~/assets/logo.svg'

export default function Footer() {
	return (
		<section>
			<div className='mx-auto lg:max-w-7xl flex flex-col-reverse lg:flex-row justify-between p-4 min-h-[80px] text-sm items-center'>
				<div className='flex items-center gap-2 mt-4 lg:mt-0'>
					<Image src={logo} alt='logo' width={32} />
					<span className='opacity-80'>© 2023 Liga</span>
				</div>
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
