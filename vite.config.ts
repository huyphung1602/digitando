import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    [vue()],
    WindiCSS({
      root: process.cwd(),
      // set the path of the config file for windi css
      config: './windi.config.ts',
      scan: {
        fileExtensions: ['erb', 'html', 'vue', 'rb', 'jsx', 'tsx'],
        dirs: ['app/views', 'app/helpers', 'app/javascript'],
      }
    }),
  ],
})
