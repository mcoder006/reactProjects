import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // env variable 
    'process.env.CREDENTIAL_KEY': JSON.stringify(process.env.CREDENTIAL_KEY)
  }
})
