import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],

	extensions: ['.svelte', '.md'],
	
	kit: {
		adapter: adapter({
			pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true,
			trailingSlash: 'always'
		})
	}
};

export default config;
