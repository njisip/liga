'use client'

import { Moon, Sun, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function ThemeToggleButton() {
	const { theme, setTheme, systemTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	function toggleTheme() {
		if (theme === 'light' || (theme === 'system' && systemTheme === 'light'))
			setTheme('dark')
		else if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
			setTheme('light')
	}

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<Button variant='outline' size='icon' onClick={toggleTheme} disabled={!isMounted}>
			{!isMounted ? <SunMoon /> : theme === 'light' ? <Sun /> : <Moon />}
		</Button>
	)
}
