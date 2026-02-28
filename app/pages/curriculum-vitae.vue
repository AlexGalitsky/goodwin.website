<template>
  <div>
    <section class="py-20">
      <div class="container">
        <!-- Header -->
        <div class="max-w-1xl mb-12">
          <div class="flex items-start justify-between gap-4 mb-4">
            <h1 class="text-3xl md:text-4xl font-bold text-foreground">
              {{ $t('resume.title') }}
            </h1>
            <div class="flex items-center gap-2">
              <button
                @click="handlePrint"
                class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-secondary/80 rounded-md border border-border transition-colors print:hidden"
                :aria-label="$t('resume.print.label')"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
              <div class="relative">
                <button
                  @click="downloadMenuOpen = !downloadMenuOpen"
                  class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-secondary hover:bg-secondary/80 rounded-md border border-border transition-colors print:hidden"
                >
                  <span>{{ $t('resume.download.label') }}</span>
                  <svg
                    :class="['w-4 h-4 transition-transform', downloadMenuOpen ? 'rotate-180' : '']"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  v-if="downloadMenuOpen"
                  class="absolute right-0 mt-2 w-48 rounded-md border bg-background text-foreground shadow-lg z-10"
                >
                  <div class="py-1">
                    <a
                      v-for="format in cvFormats"
                      :key="format.ext"
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
            </div>
          </div>
          <p class="text-muted-foreground leading-relaxed">
            {{ $t('resume.subtitle') }}
          </p>
        </div>

        <!-- Contact Info -->
        <div class="mb-16 space-y-4">
          <div class="flex flex-wrap gap-4 text-sm">
            <span class="inline-flex items-center font-mono text-xs text-primary">
              <span class="text-muted-foreground">/*</span>
              <span class="mx-2">{{ $t('resume.contactInfo.location') }}</span>
              <span class="text-muted-foreground">*/</span>
            </span>
            <span class="inline-flex items-center font-mono text-xs text-primary">
              <span class="text-muted-foreground">/*</span>
              <span class="mx-2">{{ $t('resume.contactInfo.citizenship') }}</span>
              <span class="text-muted-foreground">*/</span>
            </span>
            <span class="inline-flex items-center font-mono text-xs text-primary">
              <span class="text-muted-foreground">/*</span>
              <span class="mx-2">{{ $t('resume.contactInfo.relocation') }}</span>
              <span class="text-muted-foreground">*/</span>
            </span>
          </div>
          <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{{ $t('resume.contactInfo.phone') }} <span class="text-xs">— {{ $t('resume.contactInfo.phoneNote') }}</span></span>
            <span>•</span>
            <span>{{ $t('resume.contactInfo.email') }}</span>
            <span>•</span>
            <span>telegram: {{ $t('resume.contactInfo.telegram') }}</span>
          </div>
        </div>

        <!-- Experience -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.experience.title') }} — {{ $t('resume.experience.total') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="space-y-12">
            <!-- RentOut -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/50">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.rentout.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.rentout.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.rentout.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.rentout.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <p class="text-sm text-muted-foreground mb-4">{{ $t('resume.experience.rentout.industry') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(sub, index) in $tm('resume.experience.rentout.subIndustry')"
                    :key="index"
                    class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                  >
                    {{ rt(sub) }}
                  </span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.skills') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(achievement, index) in $tm('resume.experience.rentout.achievements')"
                        :key="index"
                        class="text-sm text-foreground"
                      >
                        <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.rentout.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- MedTochka -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.medtochka.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.medtochka.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.medtochka.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.medtochka.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <p class="text-sm text-muted-foreground mb-4">{{ $t('resume.experience.medtochka.industry') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(sub, index) in $tm('resume.experience.medtochka.subIndustry')"
                    :key="index"
                    class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                  >
                    {{ rt(sub) }}
                  </span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.impact') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(achievement, index) in $tm('resume.experience.medtochka.achievements')"
                        :key="index"
                        class="text-sm text-foreground"
                      >
                        <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.medtochka.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                  <div class="mt-4">
                    <p class="text-sm text-primary">
                      <span class="text-primary mr-2">✓</span>{{ $t('resume.experience.medtochka.note') }}
                    </p>
                    <div class="flex gap-2 mt-2">
                      <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                        {{ $t('common.appStore') }}
                      </span>
                      <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                        {{ $t('common.googlePlay') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- M101 -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.m101.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.m101.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.m101.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.m101.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <p class="text-sm text-muted-foreground mb-4">{{ $t('resume.experience.m101.industry') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(sub, index) in $tm('resume.experience.m101.subIndustry')"
                    :key="index"
                    class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                  >
                    {{ rt(sub) }}
                  </span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.impact') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(achievement, index) in $tm('resume.experience.m101.achievements')"
                        :key="index"
                        class="text-sm text-foreground"
                      >
                        <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.m101.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                  <div class="mt-4">
                    <p class="text-sm text-primary">
                      <span class="text-primary mr-2">✓</span>{{ $t('resume.experience.m101.note') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Anthill -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.anthill.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.anthill.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.anthill.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.anthill.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <p class="text-sm text-muted-foreground mb-4">{{ $t('resume.experience.anthill.industry') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(sub, index) in $tm('resume.experience.anthill.subIndustry')"
                    :key="index"
                    class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                  >
                    {{ rt(sub) }}
                  </span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.impact') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(achievement, index) in $tm('resume.experience.anthill.achievements')"
                        :key="index"
                        class="text-sm text-foreground"
                      >
                        <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.anthill.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Independent -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.independent.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.independent.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.independent.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.independent.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.independent.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sakhamedstrakh -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.sakhamedstrakh.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.sakhamedstrakh.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.sakhamedstrakh.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.sakhamedstrakh.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.impact') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(achievement, index) in $tm('resume.experience.sakhamedstrakh.achievements')"
                        :key="index"
                        class="text-sm text-foreground"
                      >
                        <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.sakhamedstrakh.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Meduza -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.experience.meduza.company') }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.meduza.location') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('resume.experience.meduza.period') }}</p>
                <p class="text-base font-medium mt-2">{{ $t('resume.experience.meduza.position') }}</p>
              </div>
              <div class="p-6 pt-0">
                <p class="text-sm text-muted-foreground mb-4">{{ $t('resume.experience.meduza.industry') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="(sub, index) in $tm('resume.experience.meduza.subIndustry')"
                    :key="index"
                    class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                  >
                    {{ rt(sub) }}
                  </span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.description') }} */</p>
                    <ul class="space-y-1">
                      <li
                        v-for="(resp, index) in $tm('resume.experience.meduza.responsibilities')"
                        :key="index"
                        class="text-sm text-muted-foreground"
                      >
                        <span class="text-muted-foreground mr-2">•</span>{{ rt(resp) }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.education.title') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.education.university.name') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('resume.education.university.year') }}</p>
              <p class="text-sm text-muted-foreground">{{ $t('resume.education.level') }}</p>
              <p class="text-sm text-foreground mt-2">{{ $t('resume.education.university.specialty') }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.certifications.title') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">{{ $t('resume.certifications.specialist.name') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('resume.certifications.specialist.year') }}</p>
              <p class="text-sm text-foreground mt-2">{{ $t('resume.certifications.specialist.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.skills.title') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="space-y-6">
            <div class="space-y-2">
              <p class="font-mono text-xs text-muted-foreground">{{ $t('resume.skills.languages.label') }}</p>
              <div class="flex flex-wrap gap-4">
                <span class="inline-flex items-center font-mono text-xs text-primary">
                  <span class="text-muted-foreground">/*</span>
                  <span class="mx-2">{{ $t('resume.skills.languages.russian') }}</span>
                  <span class="text-muted-foreground">*/</span>
                </span>
                <span class="inline-flex items-center font-mono text-xs text-primary">
                  <span class="text-muted-foreground">/*</span>
                  <span class="mx-2">{{ $t('resume.skills.languages.english') }}</span>
                  <span class="text-muted-foreground">*/</span>
                </span>
              </div>
            </div>

            <div class="space-y-2">
              <p class="font-mono text-xs text-muted-foreground">{{ $t('resume.skills.technical.label') }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, index) in $tm('resume.skills.technical.items')"
                  :key="index"
                  class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                >
                  {{ rt(skill) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- About -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.about.title') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="space-y-8">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-4">
                <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.contact') }} */</p>
                <p class="text-sm text-foreground">{{ $t('resume.about.contacts.telegram') }}</p>
                <p class="text-sm text-foreground">{{ $t('resume.about.contacts.website') }}</p>
                <p class="text-sm text-foreground">{{ $t('resume.about.contacts.email') }}</p>
                <p class="text-sm text-muted-foreground italic">{{ $t('resume.about.contacts.note') }}</p>
              </div>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/50">
              <div class="p-6 space-y-4">
                <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.about') }} */</p>
                <p class="text-sm text-foreground leading-relaxed">{{ $t('resume.about.summary') }}</p>
              </div>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-4">
                <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.impact') }} */</p>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, index) in $tm('resume.about.achievements')"
                    :key="index"
                    class="text-sm text-foreground"
                  >
                    <span class="text-primary mr-2">→</span>{{ rt(achievement) }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-4">
                <p class="font-mono text-xs text-primary mb-2">/* {{ $t('common.skills') }} */</p>
                <ul class="space-y-2">
                  <li
                    v-for="(competency, index) in $tm('resume.about.competencies')"
                    :key="index"
                    class="text-sm text-muted-foreground"
                  >
                    <span class="text-muted-foreground mr-2">•</span>{{ rt(competency) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Recommendations -->
        <div class="mb-16">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">{{ $t('resume.recommendations.title') }}</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>

          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-2">
                <h4 class="font-semibold">{{ $t('resume.recommendations.taxyMatch.name') }}</h4>
                <p class="text-sm text-muted-foreground">{{ $t('resume.recommendations.taxyMatch.position') }}</p>
                <p class="text-sm text-primary">{{ $t('resume.recommendations.taxyMatch.company') }}</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="p-6 space-y-2">
                <h4 class="font-semibold">{{ $t('resume.recommendations.wati.name') }}</h4>
                <p class="text-sm text-muted-foreground">{{ $t('resume.recommendations.wati.position') }}</p>
                <p class="text-sm text-primary">{{ $t('resume.recommendations.wati.company') }}</p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/50">
              <div class="p-6 space-y-2">
                <h4 class="font-semibold">{{ $t('resume.recommendations.rentout.name') }}</h4>
                <p class="text-sm text-muted-foreground">{{ $t('resume.recommendations.rentout.position') }}</p>
                <p class="text-sm text-primary">{{ $t('resume.recommendations.rentout.company') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Back to Work Link -->
        <div class="pt-8 border-t border-border">
          <NuxtLink
            to="/work"
            class="inline-flex items-center text-primary hover:underline font-mono text-sm"
          >
            <span class="text-muted-foreground mr-2">/*</span>
            {{ $t('common.backToWork') }}
            <span class="text-muted-foreground ml-2">*/</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t, tm, rt, locale } = useI18n()

const downloadMenuOpen = ref(false)

const cvFormats = computed(() => [
  { ext: 'pdf', href: '/cv/cv_alex_galitsky.pdf', label: t('resume.download.formats.pdf') },
  { ext: 'doc', href: '/cv/cv_alex_galitsky.doc', label: t('resume.download.formats.doc') },
  { ext: 'rtf', href: '/cv/cv_alex_galitsky.rtf', label: t('resume.download.formats.rtf') },
  { ext: 'mhtml', href: '/cv/cv_alex_galitsky.mhtml', label: t('resume.download.formats.mhtml') },
])

const handlePrint = () => {
  window.print()
}

onMounted(() => {
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault()
      window.print()
    }
  }
  window.addEventListener('keydown', handleKeyDown)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })
})

useHead({
  title: t('meta.resumeTitle')
})
</script>

<style>
@media print {
  body {
    background: white !important;
  }
  
  .container {
    max-width: 100% !important;
    padding: 0 !important;
  }
  
  /* Hide elements */
  header,
  footer,
  nav,
  .print\:hidden {
    display: none !important;
  }
  
  /* Remove shadows and borders */
  .rounded-lg,
  .shadow-sm {
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  
  /* Ensure white backgrounds */
  .bg-card,
  .bg-secondary,
  .bg-popover,
  .bg-accent {
    background: white !important;
  }
  
  /* Text colors for print */
  .text-muted-foreground,
  .text-primary,
  .text-card-foreground,
  .text-popover-foreground {
    color: black !important;
  }
  
  /* Remove decorative elements */
  .border-primary\/50 {
    border-color: #e5e7eb !important;
  }
  
  /* Page breaks */
  .mb-16 {
    margin-bottom: 1rem !important;
  }
  
  /* Ensure links are visible */
  a {
    color: black !important;
    text-decoration: none;
  }
}
</style>
