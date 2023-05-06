import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  preset: 'cloudflare',
  storage: {
    cache: {
      driver: "cloudflareKVBinding",
      binding: "NITRO_STUDY_CACHE",
    }
  },
  prerender: {
    routes: [
      '/',
      '/brendon',
    ],
    crawlLinks: true,
    ignore: [
      '/brendon5sec',
    ]
  },
  routeRules: {
    '/**': {
      cache: {
        maxAge: 5
      }
    },
  },
});
