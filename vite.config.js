import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tahsdj.github.io/magic-wand/',
  plugins: [reactRefresh(), WindiCSS()]
})
