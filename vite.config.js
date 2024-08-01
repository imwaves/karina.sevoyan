import { defineConfig, loadEnv } from 'vite';
import postcssNesting from 'postcss-nesting';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env);

  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'assets/pics/orig',
            dest: 'assets/pics/',
          }
        ]
      })
    ],
    base: './',
    css: {
      postcss: {
        plugins: [postcssNesting],
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    build: {
      // assetsInlineLimit: 1024 * 10,
      // assetsInlineLimit: 0,
      target: ['chrome87'],
    }
  }
})