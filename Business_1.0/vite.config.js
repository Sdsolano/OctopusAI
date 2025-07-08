import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',  // archivo en la raíz del proyecto
          dest: '.'      // lo copia directamente en dist/
        }
      ]
    })
  ],
  base:'/',
})
