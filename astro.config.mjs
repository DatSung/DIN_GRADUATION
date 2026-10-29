import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'multicapsular-unscrupulously-raegan.ngrok-free.dev'
    ]
  }
});