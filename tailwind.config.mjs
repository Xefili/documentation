/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./public/styles/*.css', '.src/pages/.astro'],
	theme: {
		extend: {
			fontFamily: {
				mono: "JetBrains Mono"
			}
		},
	},
	plugins: [],
}
