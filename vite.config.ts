import { defineConfig } from 'vite';
import { VitePWA as PWA } from 'vite-plugin-pwa';
import Components from 'vite-plugin-components';
import Icons, { ViteIconsResolver } from 'vite-plugin-icons';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		Components({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: '',
				}),
			],
		}),
		Icons(),
		Pages(),
		PWA({
			manifest: {
				name: 'nuro',
				short_name: 'nuro',
				theme_color: '#ffffff',
			},
		}),
		Vue(),
		WindiCSS({
			windicssOptions: {
				darkMode: 'class',
				plugins: [
					require('windicss/plugin/aspect-ratio'),
					require('windicss/plugin/forms'),
					require('windicss/plugin/typography'),
				],
			},
		}),
	],
});