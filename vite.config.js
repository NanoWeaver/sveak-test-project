import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/sveak-test-project/',
  build: {
    outDir: 'docs',
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            '> 1%',
            'last 2 versions',
            'not dead',
            'iOS >= 12',
            'Android >= 4.4',
            'Firefox >= 60',
            'Chrome >= 60',
            'Safari >= 12',
            'Edge >= 79',
          ],
          grid: 'autoplace',
        }),
      ],
    },
  },
});
