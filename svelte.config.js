import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		appDir: 'app_',
		paths: {
			base: process.env.NODE_ENV === 'development' ? '/' : '/sveltekit-static-repro'
		}
	},
};

export default config;
