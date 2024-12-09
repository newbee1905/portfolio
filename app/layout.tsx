import './global.css'
import type { Metadata } from 'next'

import { Navbar } from 'components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from 'components/footer'
import { baseUrl } from './sitemap'

import localFont from 'next/font/local';

const fantasqueSansMono = localFont({
	src: [
		{
			path: './fonts/FantasqueSansMono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/FantasqueSansMono-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/FantasqueSansMono-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/FantasqueSansMono-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-fantasque-sans-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Next.js Portfolio Starter',
		template: '%s | Next.js Portfolio Starter',
	},
	description: 'This is my portfolio.',
	openGraph: {
		title: 'My Portfolio',
		description: 'This is my portfolio.',
		url: baseUrl,
		siteName: 'My Portfolio',
		locale: 'en_AU',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={cx(
				'font-sans text-kanagawa-text dark:text-kanagawa-dark-text bg-kanagawa-bg dark:bg-kanagawa-dark-bg',
			)}
		>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<main className={`${fantasqueSansMono.variable} flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0`}>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	)
}
