import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-fantasque-sans-mono)'],
				serif: ['var(--font-fantasque-sans-mono)'],
				mono: ['var(--font-fantasque-sans-mono)'],
			},
			colors: {
				kanagawa: {
					text: "#343434", // Earthy grey-black
					bg: "#f4ece1", // Warm off-white
					body: "#dcd7ba", // Soft beige
					bodyText: "#5a524c", // Warm earthy grey
					highlight: "#7fb4ca", // Muted light blue
					keyword: "#d27e99", // Muted pink-red
					string: "#a3c47f", // Brighter green
					comment: "#5a524c", // Dark earthy grey
					accent: "#ffa066", // Peach-orange
					dark: {
						text: "#dcd7ba", // Warm beige for dark mode text
						bg: "#16161D", // Deep black-brown for dark background
						body: "#2a2a2a", // Muted dark grey
						bodyText: "#c8c093", // Warm beige for dark mode body text
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
