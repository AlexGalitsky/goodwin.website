<template>
  <div v-if="project">
    <section class="py-20">
      <div class="container max-w-4xl">
        <NuxtLink
          to="/work"
          class="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left mr-2 h-4 w-4">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          {{ $t('common.backToWork') }}
        </NuxtLink>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-1">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">{{ project.title }}</h1>
          <p class="text-lg text-muted-foreground leading-relaxed mb-6">
            {{ project.fullDescription }}
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
            >
              {{ tech }}
            </span>
          </div>
          <div class="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
            <span class="font-mono text-sm text-primary">
              <span class="text-muted-foreground">//</span> {{ $t('common.impact') }}: {{ project.impact }}
            </span>
          </div>

          <div class="flex flex-wrap gap-4">
            <a
              v-if="project.links?.appStore"
              :href="project.links.appStore"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-apple h-4 w-4 mr-2">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.385-2.376-2-.156-3.675 1.09-4.597 1.09zM15.532 3.752c.843-1.012 1.4-2.427 1.245-3.752-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.675 1.338.104 2.715-.675 3.57-1.688z"/>
              </svg>
              {{ $t('common.appStore') }}
            </a>
            <a
              v-if="project.links?.googlePlay"
              :href="project.links.googlePlay"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-play h-4 w-4 mr-2">
                <path d="M5.255 5.702c-.217.11-.367.326-.396.575a.753.753 0 0 0 .003.096v11.714a.75.75 0 0 0 .393.671l10.5 5.25a.75.75 0 0 0 1.092-.671V4.473a.75.75 0 0 0-1.092-.671l-10.5 5.25z"/>
              </svg>
              {{ $t('common.googlePlay') }}
            </a>
          </div>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-2">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('common.description') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-3">
          <p class="text-muted-foreground leading-relaxed">
            {{ project.detailedDescription }}
          </p>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-3">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('common.screenshots') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="(screenshot, index) in project.screenshots"
              :key="index"
              class="group relative overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                :src="screenshot"
                :alt="`${project.title} screenshot ${index + 1}`"
                class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              >
            </div>
          </div>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-4">
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in project.features"
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="font-mono text-primary mt-1">✓</span>
              <span class="text-muted-foreground">{{ rt(feature) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const route = useRoute()
const { t, tm, rt, locale } = useI18n()

const projectsData = computed(() => {
  const currentLocale = locale.value 

  return {
    'taxymatch': {
      title: t('projects.taxymatch.title'),
      fullDescription: t('projects.taxymatch.fullDescription'),
      detailedDescription: t('projects.taxymatch.detailedDescription'),
      tech: ['Flutter', 'Laravel', 'PostgreSQL'],
      impact: t('projects.taxymatch.impact'),
      features: tm('projects.taxymatch.features'),
      links: {
        appStore: 'https://apps.apple.com/ru/app/taxymatch-taxi-vtc-partag%C3%A9/id1437408081',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.TaxyMatch.TaxyMatch2&hl=ru'
      },
      screenshots: [
        '/projects/taxymatch/1.webp',
        '/projects/taxymatch/2.webp',
        '/projects/taxymatch/3.webp',
        '/projects/taxymatch/4.webp',
        '/projects/taxymatch/5.webp',
        '/projects/taxymatch/6.webp',
        '/projects/taxymatch/7.webp'
      ]
    },
    'medtochka': {
      title: t('projects.medtochka.title'),
      fullDescription: t('projects.medtochka.fullDescription'),
      detailedDescription: t('projects.medtochka.detailedDescription'),
      tech: ['Flutter', 'Django', 'PostgreSQL'],
      impact: t('projects.medtochka.impact'),
      features: tm('projects.medtochka.features'),
      links: {
        appStore: 'https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B4%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%BA-%D0%B2%D1%80%D0%B0%D1%87%D1%83/id1591602076',
        googlePlay: 'https://play.google.com/store/apps/details?id=ru.medtochka&hl=ru'
      },
      screenshots: [
        '/projects/medtochka/1.webp',
        '/projects/medtochka/2.webp',
        '/projects/medtochka/3.webp',
        '/projects/medtochka/4.webp',
        '/projects/medtochka/5.webp',
        '/projects/medtochka/6.webp',
        '/projects/medtochka/7.webp',
        '/projects/medtochka/8.webp'
      ]
    },
    'rentout': {
      title: t('projects.rentout.title'),
      fullDescription: t('projects.rentout.fullDescription'),
      detailedDescription: t('projects.rentout.detailedDescription'),
      tech: ['Flutter', 'Laravel', 'PostgreSQL'],
      impact: t('projects.rentout.impact'),
      features: tm('projects.rentout.features'),
      links: {
        appStore: 'https://apps.apple.com/ru/app/rentout-%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE/id6670768633',
        googlePlay: 'https://play.google.com/store/apps/details?id=one.rentout.rentout&hl=ru'
      },
      screenshots: [
        '/projects/rentoout/1.webp',
        '/projects/rentoout/2.webp',
        '/projects/rentoout/3.webp',
        '/projects/rentoout/4.webp',
        '/projects/rentoout/5.webp',
        '/projects/rentoout/6.webp',
        '/projects/rentoout/7.webp',
        '/projects/rentoout/8.webp'
      ]
    },
    'aquarius': {
      title: t('projects.aquarius.title'),
      fullDescription: t('projects.aquarius.fullDescription'),
      detailedDescription: t('projects.aquarius.detailedDescription'),
      tech: ['Flutter', 'Laravel', 'PostgreSQL'],
      impact: t('projects.aquarius.impact'),
      features: tm('projects.aquarius.features'),
      links: {
        appStore: 'https://apps.apple.com/ru/app/%D0%B2%D0%BE%D0%B4%D0%BE%D0%BB%D0%B5%D0%B9-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B2%D0%BE%D0%B4%D1%8B-%D1%8F%D0%BA%D1%83%D1%82%D1%81%D0%BA/id6753923701',
        googlePlay: 'https://play.google.com/store/apps/details?id=monster.voda.vodoley&hl=ru'
      },
      screenshots: [
        '/projects/vodoley/1.webp',
        '/projects/vodoley/2.webp',
        '/projects/vodoley/3.webp',
        '/projects/vodoley/4.webp'
      ]
    }
  }
})

const project = computed(() => projectsData.value[route.params.slug])

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}

useHead({
  title: project.value?.title + ' | goodwin - Alex Galitsky | Developer'
})

useSeoMeta({
  title: () => project.value?.title || ' | goodwin - Alex Galitsky | Developer',
  description: () => project.value?.fullDescription,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.fullDescription,
  ogType: 'website',
  // ogImage: () => project.value?.image 
})

useHead({
  htmlAttrs: {
    lang: () => locale.value
  }
})
</script>
