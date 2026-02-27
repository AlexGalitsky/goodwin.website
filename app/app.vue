<template>
  <div>
    <Header />
    <main class="flex-1 pt-16">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
const { t, locale } = useI18n()
const route = useRoute()

useHead({
  htmlAttrs: {
    lang: locale
  },
  title: () => {
    if (route.path === '/') return t('meta.homeTitle')
    if (route.path === '/about') return t('meta.aboutTitle')
    if (route.path === '/work') return t('meta.workTitle')
    if (route.path === '/contact') return t('meta.contactTitle')
    return t('meta.homeTitle')
  },
  meta: [
    { name: 'description', content: t('meta.homeDescription') }
  ]
})
</script>
