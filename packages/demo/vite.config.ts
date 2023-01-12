import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TdsVueCore',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
      },
    },
  },
});
