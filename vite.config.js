import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [
    {
      name: 'transform-extensionless-text-type',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.split('?')[0].endsWith('/src/components/text_type')) {
          return null;
        }

        const source = code.replace('ElementType, ', '');

        return transformWithOxc(source, id, {
          lang: 'tsx',
          jsx: {
            runtime: 'automatic',
          },
        });
      },
    },
    react(),
  ],
});
