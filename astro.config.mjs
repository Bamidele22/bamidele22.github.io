import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: '/web/',
  integrations: [icon()],
  vite: {
    ssr: {
      external: ["svgo"],
    }
  },
  server: {
    port: 8000
  },
  site: 'https://bamidele22.github.io/web'
});
