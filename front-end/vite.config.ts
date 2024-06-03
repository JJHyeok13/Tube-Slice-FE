import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://www.tubeslice.site:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
      '/naver': {
        target: 'https://nid.naver.com/oauth2.0/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/naver/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
