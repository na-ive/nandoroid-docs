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
			favicon: '/NAnDoroid.svg',
			customCss: ['./src/styles/custom.css'],
			plugins: [starlightThemeNova()],
			editLink: {
				baseUrl: 'https://github.com/na-ive/nandoroid-docs/edit/main/',
			},
			lastUpdated: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/na-ive/nandoroid-shell' }],
			sidebar: [
				{
					label: 'General',
					items: [{ autogenerate: { directory: 'general' } }],
				},
				{
					label: 'Guide',
					items: [{ autogenerate: { directory: 'guide' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Dev Notes',
					items: [{ autogenerate: { directory: 'dev' } }],
				},
			],
		}),
	],
});
