// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	site: 'https://nandoroid.naive.my.id',
	integrations: [
		starlight({
			title: 'NAnDoroid-shell',
			logo: { src: './public/NAnDoroid.svg', replacesTitle: false },
			customCss: ['./src/styles/custom.css'],
			plugins: [starlightThemeNova()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/na-ive/nandoroid-shell' }],
			sidebar: [
				{
					label: 'Guide',
					items: [{ autogenerate: { directory: 'guide' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
