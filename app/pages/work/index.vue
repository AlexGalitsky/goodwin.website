<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Work</h1>
          <p class="text-muted-foreground leading-relaxed">
            A selection of projects showcasing systems engineering, product development, and technical problem-solving. Each project represents real challenges solved with measurable impact.
          </p>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-1">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Projects</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="grid gap-8">
          <NuxtLink 
            v-for="(project, index) in projects" 
            :key="project.slug"
            :to="`/work/${project.slug}`"
            class="opacity-0 animate-fade-in-up"
            :class="`stagger-${index + 2}`"
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
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    slug: 'scalable-fintech-platform',
    title: 'Scalable Fintech Platform',
    description: 'Development of a scalable financial platform designed to handle millions of transactions with real-time processing capabilities. Built with a focus on security, reliability, and performance at scale.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    impact: '35% latency reduction, support for millions of users'
  },
  {
    slug: 'internal-design-system',
    title: 'Internal Design System',
    description: 'Creation of a comprehensive design system that enables multiple development teams to build consistent, accessible, and visually cohesive interfaces. Includes documentation, component library, and design tokens.',
    tech: ['React', 'Storybook', 'CSS-in-JS', 'TypeScript'],
    impact: '40% increase in team productivity, improved visual consistency'
  },
  {
    slug: 'real-time-analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'A real-time dashboard built for instant decision-making. Features live data visualization, customizable metrics, and seamless integration with multiple data sources for product and business intelligence.',
    tech: ['Next.js', 'WebSockets', 'D3.js', 'Redis'],
    impact: 'Instant insights for product and business teams'
  },
  {
    slug: 'e-commerce-microservices-architecture',
    title: 'E-Commerce Microservices Architecture',
    description: 'Complete microservices ecosystem for a high-traffic e-commerce platform. Features event-driven architecture, automated scaling, and distributed data management for maximum reliability and performance.',
    tech: ['Go', 'Kubernetes', 'gRPC', 'MongoDB'],
    impact: '99.99% uptime, 10x throughput improvement'
  }
]
</script>
