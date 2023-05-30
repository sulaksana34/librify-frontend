import { defineNuxtConfig } from 'nuxt/config'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true,

    },

  ],
  imports: {
    dirs: [
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-indonesia'],
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'id-ID',
        file: 'id-ID.json',
      },
      {
        code: 'en-US',
        file: 'en-US.json',
      },
    ],
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'id-ID',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'id-ID',
      useCookie: true,
      cookieKey: 'librify_i18n_redirected',
      cookieCrossOrigin: true,
    },
    vueI18n: {
      legacy: false,
      locale: 'id-ID',
      availableLocales: ['id-ID', 'en-US'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@intlify/nuxt3', './type.d.ts'],
      },
    },
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },

  vite: {
    logLevel: 'info',
    define: {
      __DEV__: (process.env.NODE_ENV === 'development').toString(),
    },
  },
})
