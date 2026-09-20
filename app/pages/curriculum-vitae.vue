<template>
  <div>
    <section class="py-20">
      <div class="container max-w-3xl">
        <div class="mb-10 print:hidden">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {{ $t('resume.title') }}
              </h1>
              <p class="text-muted-foreground">{{ $t('resume.subtitle') }}</p>
            </div>
            <div class="relative">
              <button
                type="button"
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-secondary/80 rounded-md border border-border"
                @click="downloadMenuOpen = !downloadMenuOpen"
              >
                {{ $t('resume.download.label') }}
                <svg :class="['w-4 h-4 transition-transform', downloadMenuOpen ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="downloadMenuOpen"
                class="absolute right-0 mt-2 w-56 rounded-md border bg-background shadow-lg z-10"
              >
                <a
                  v-for="format in cvFormats"
                  :key="format.href"
                  :href="format.href"
                  download
                  class="block px-4 py-2 text-sm hover:bg-accent"
                  @click="downloadMenuOpen = false"
                >
                  {{ format.label }}
                </a>
              </div>
            </div>
          </div>
          <p class="text-sm text-muted-foreground font-mono">{{ $t('resume.contactLine') }}</p>
        </div>

        <div class="mb-10">
          <p class="text-foreground leading-relaxed">{{ $t('resume.summary') }}</p>
          <p class="mt-4 text-sm text-muted-foreground">{{ $t('resume.note') }}</p>
        </div>

        <div class="mb-10">
          <div class="flex items-center gap-4 py-6">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('common.experience') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
          <div class="space-y-8">
            <article
              v-for="(job, index) in jobs"
              :key="index"
              class="border-b border-border pb-8 last:border-0"
            >
              <h2 class="text-lg font-semibold text-foreground">{{ job.company }}</h2>
              <p class="text-sm text-primary font-mono mt-1">{{ job.position }}</p>
              <p class="text-sm text-muted-foreground mb-3">{{ job.period }}</p>
              <ul class="space-y-1">
                <li
                  v-for="(bullet, bIndex) in job.bullets"
                  :key="bIndex"
                  class="text-sm text-muted-foreground"
                >
                  <span class="text-primary mr-2">→</span>{{ bullet }}
                </li>
              </ul>
            </article>
          </div>
          <p class="mt-6 text-sm text-muted-foreground leading-relaxed">{{ $t('resume.earlier') }}</p>
        </div>

        <div class="mb-10">
          <div class="flex items-center gap-4 py-6">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('common.skills') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li><span class="text-primary font-mono text-xs mr-2">mobile</span>{{ $t('resume.skills.mobile') }}</li>
            <li><span class="text-primary font-mono text-xs mr-2">backend</span>{{ $t('resume.skills.backend') }}</li>
            <li><span class="text-primary font-mono text-xs mr-2">infra</span>{{ $t('resume.skills.infra') }}</li>
            <li><span class="text-primary font-mono text-xs mr-2">lead</span>{{ $t('resume.skills.lead') }}</li>
          </ul>
        </div>

        <div class="mb-10">
          <div class="flex items-center gap-4 py-6">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('common.education') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
          <p class="text-sm text-muted-foreground">{{ $t('resume.education') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, tm, rt } = useI18n()

const downloadMenuOpen = ref(false)

const cvFormats = computed(() => [
  { href: '/cv/Alex_Galitsky_TechLead_CV_RU.pdf', label: t('resume.download.formats.pdfRu') },
  { href: '/cv/Alex_Galitsky_TechLead_CV_RU.docx', label: t('resume.download.formats.docxRu') },
  { href: '/cv/Alex_Galitsky_TechLead_CV_EN.pdf', label: t('resume.download.formats.pdfEn') },
  { href: '/cv/Alex_Galitsky_TechLead_CV_EN.docx', label: t('resume.download.formats.docxEn') },
])

const jobs = computed(() => {
  const list = tm('resume.jobs')
  if (!Array.isArray(list)) return []
  return list.map((job) => ({
    company: rt(job.company),
    period: rt(job.period),
    position: rt(job.position),
    bullets: Array.isArray(job.bullets) ? job.bullets.map((b) => rt(b)) : []
  }))
})

useHead({
  title: t('meta.resumeTitle')
})
</script>
