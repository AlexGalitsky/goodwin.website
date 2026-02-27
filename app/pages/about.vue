<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">{{ $t('about.title') }}</h1>
        </div>

        <div class="grid gap-16 lg:grid-cols-3">
          <div class="lg:col-span-2 space-y-6">
            <div class="mb-8 opacity-0 animate-fade-in-up stagger-1">
              <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary">
                <img
                  src="/images/my-face.jpg"
                  alt="Alex Galitsky - Full-stack Developer"
                  class="w-full h-full object-cover"
                >
              </div>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-1">
              <p class="text-lg text-foreground leading-relaxed" v-html="$t('about.intro')">
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-2">
              <p class="text-muted-foreground leading-relaxed">
                {{ $t('about.paragraph1') }}
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-3">
              <p class="text-muted-foreground leading-relaxed">
                {{ $t('about.paragraph2') }}
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-4">
              <div class="flex items-center gap-4 py-8">
                <span class="font-mono text-sm text-primary">//</span>
                <span class="font-mono text-sm text-muted-foreground">{{ $t('common.philosophy') }}</span>
                <div class="flex-1 h-px bg-border"></div>
              </div>
            </div>

            <div class="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> {{ $t('about.philosophy1') }}
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> {{ $t('about.philosophy2') }}
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> {{ $t('about.philosophy3') }}
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> {{ $t('about.philosophy4') }}
              </p>
            </div>
          </div>

          <div class="space-y-8">
            <div class="opacity-0 animate-fade-in-up stagger-2">
              <h2 class="font-mono text-sm text-primary mb-4">
                <span class="text-muted-foreground">/*</span> {{ $t('common.skills') }} <span class="text-muted-foreground">*/</span>
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="(skill, index) in $t('about.skillsList')"
                  :key="index"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span class="text-primary mr-2">→</span>{{ skill }}
                </li>
              </ul>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-3">
              <h2 class="font-mono text-sm text-primary mb-4">
                <span class="text-muted-foreground">/*</span> {{ $t('common.stack') }} <span class="text-muted-foreground">*/</span>
              </h2>
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Flutter
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Dart
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Laravel
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  PHP
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  .Net core
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  TypeScript
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  React
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Vue
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Next.js
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Node.js
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  PostgreSQL
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Next.js
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  GraphQL
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Redis
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Docker
                </span>
                <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                  Azure
                </span>
              </div>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-4">
              <h2 class="font-mono text-sm text-primary mb-4">
                <span class="text-muted-foreground">/*</span> {{ $t('common.experience') }} <span class="text-muted-foreground">*/</span>
              </h2>
              <div class="space-y-3 text-sm text-muted-foreground">
                <p v-for="(exp, index) in $t('about.experienceList')" :key="index">
                  {{ exp }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('meta.aboutTitle')
})
</script>
