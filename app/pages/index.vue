<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center bg-grid">
      <div class="container">
        <div class="max-w-3xl">
          <span class="inline-flex items-center font-mono text-xs text-primary mb-6">
            <span class="text-muted-foreground">/*</span>
            <span class="mx-2">Full-stack Developer</span>
            <span class="text-muted-foreground">*/</span>
          </span>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm Alex.<br>
            <span class="text-muted-foreground">Building bridges between the server and the user</span>
            <span class="inline-block w-[3px] h-[1em] bg-primary animate-blink ml-1 align-middle"></span>
          </h1>
          
          <p class="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
            I'm a full-stack developer with a passion for mobile development.

For me, code is simply a tool to solve problems.
I don't just write code; I create solutions that work just as well "under the hood" as they do on the surface.
          </p>
          
          <div class="opacity-0 animate-fade-in-up stagger-2">
            <NuxtLink 
              to="/work"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-mono transition-transform hover:scale-105"
            >
              View Work
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container">
        <div class="opacity-0 animate-fade-in-up">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Featured Work</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <NuxtLink 
            v-for="(project, index) in featuredProjects" 
            :key="project.slug"
            :to="`/work/${project.slug}`"
            class="opacity-0 animate-fade-in-up"
            :class="`stagger-${index + 1}`"
          >
            <article class="group p-6 bg-card border border-border rounded-lg transition-all hover:border-primary/50 hover:bg-card/80 cursor-pointer hover-lift">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-mono text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {{ project.title }}
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
              <p class="text-sm text-muted-foreground mb-4 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.tech" 
                  :key="tech"
                  class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="pt-4 border-t border-border">
                <span class="font-mono text-xs text-primary">
                  <span class="text-muted-foreground">//</span> {{ project.impact }}
                </span>
              </div>
            </article>
          </NuxtLink>
        </div>

        <div class="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
          <NuxtLink 
            to="/work"
            class="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
          >
            <span class="text-primary mr-2">//</span>View all projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredProjects = [
  {
    slug: 'taxymatch',
    title: 'TaxyMatch',
    description: 'A specialized ride-sharing application designed for airport and train station transfers across France.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Seamless matching between travelers and drivers'
  },
  {
    slug: 'medtochka',
    title: 'MedTochka (MedPoint)',
    description: 'A comprehensive patient portal developed for the "ProDoctors" platform.',
    tech: ['Flutter', 'Django', 'PostgreSQL'],
    impact: 'Easy access to healthcare specialists'
  },
  {
    slug: 'rentout',
    title: 'RentOut',
    description: 'A versatile property rental platform catering to both short-term and long-term housing needs.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Efficient property marketplace'
  },
  {
    slug: 'aquarius',
    title: 'Aquarius (Vodoley)',
    description: 'An on-demand delivery application specifically for the bottled water market in Yakutsk.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Simplified water delivery scheduling'
  }
]
</script>
