import { minify } from 'html-minifier-terser'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  },
  hooks: {
    'nitro:init': (nitro) => {
      nitro.hooks.hook('prerender:generate', async (route) => {
        if (route.fileName?.endsWith('.html') && route.contents) {
          route.contents = await minify(route.contents, {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
          })
        }
      })
    }
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  i18n: {
    baseUrl: 'https://goodwin.website',
    vueI18n: './app/i18n.config.ts',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'ru', name: 'Русский', iso: 'ru-RU', file: 'ru.json' }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: [
        '/',
        '/work',
        '/about',
        '/contact',
        '/curriculum-vitae',
        '/styleguide',
        '/work/taxymatch',
        '/work/medtochka',
        '/work/rentout',
        '/work/aquarius'
      ]
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap' }
      ]
    }
  }
})
