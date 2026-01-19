// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { storyblok } from '@storyblok/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: '7ijlTrctDf3CK61fFyLFyAtt',
      components: {
        page: 'storyblok/Page',
        blog_post: 'storyblok/BlogPost',
        hero_section: 'storyblok/HeroSection',
        text_block: 'storyblok/TextBlock',
        cta_section: 'storyblok/CTASection',
      },
      apiOptions: {
        region: 'eu',
      },
      // Enable bridge for visual editor in dev mode
      bridge: import.meta.env.DEV,
      enableFallbackComponent: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss(), basicSsl()],
    server: {
      https: true,
    },
  },
});
