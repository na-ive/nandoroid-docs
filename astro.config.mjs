// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://nandoroid.naive.my.id',
	integrations: [
		starlight({
			title: 'NAnDoroid-shell',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/na-ive/nandoroid-shell' }],
			sidebar: [
				{
					label: 'Guide',
					autogenerate: { directory: 'guide' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
