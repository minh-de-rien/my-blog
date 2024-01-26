/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				navy: '#141E46',
			}
		},
		fontFamily: {
			'montserrat': '"Montserrat Alternates"',
			'bettins': 'Bettins'
		},
		fontSize: {
			sm: ['0.875rem', '1.25rem'], 
			lg: ['1.125rem', '1.75rem'],
			xl: ['1.25rem', '1.75rem'],
			'4xl': ['2.25rem', '2.5rem'],
			'5xl': ['3rem', '1'],
			'6xl': ['3.75rem', '1'],
			'7xl': ['4.5rem', '1'],
			'10xl': '12rem;'
		}
	},
	plugins: [],
}
