const sveltePreprocess = require('svelte-preprocess');

const production = process.NODE_ENV === 'production';

module.exports = {
  preprocess: [
    sveltePreprocess({
      sourceMap: !production,
      postcss: {
        whitelistPatterns: [/svelte-/],
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }),
  ],
};
