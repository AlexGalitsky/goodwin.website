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
          Back to Work
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
          <div class="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <span class="font-mono text-sm text-primary">
              <span class="text-muted-foreground">//</span> Impact: {{ project.impact }}
            </span>
          </div>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-2">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Challenges</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-3">
          <ul class="space-y-3">
            <li 
              v-for="(challenge, index) in project.challenges" 
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="font-mono text-primary mt-1">→</span>
              <span class="text-muted-foreground">{{ challenge }}</span>
            </li>
          </ul>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-3">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Features</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-4">
          <ul class="space-y-3">
            <li 
              v-for="(feature, index) in project.features" 
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="font-mono text-primary mt-1">✓</span>
              <span class="text-muted-foreground">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
          <button 
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2 h-4 w-4">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View Code
          </button>
          <button 
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2 h-4 w-4">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
            Live Demo
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()

const projectsData = {
  'scalable-fintech-platform': {
    title: 'Scalable Fintech Platform',
    fullDescription: 'Built a comprehensive financial platform from the ground up, focusing on security, reliability, and performance at scale. The system processes millions of transactions daily with sub-second latency, implementing sophisticated fraud detection algorithms and real-time analytics dashboards for stakeholders.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    impact: '35% latency reduction, support for millions of users',
    challenges: [
      'Handling high-volume concurrent transactions without data loss',
      'Implementing real-time fraud detection with minimal false positives',
      'Ensuring PCI-DSS compliance across the entire stack',
      'Scaling horizontally while maintaining data consistency'
    ],
    features: [
      'Real-time transaction processing engine',
      'Multi-factor authentication system',
      'Automated fraud detection with ML models',
      'Comprehensive audit logging and reporting'
    ]
  },
  'internal-design-system': {
    title: 'Internal Design System',
    fullDescription: 'Designed and implemented a comprehensive design system used across multiple product teams. The system includes a complete component library, design tokens, documentation, and tooling to ensure consistency and accessibility across all products.',
    tech: ['React', 'Storybook', 'CSS-in-JS', 'TypeScript', 'A11y'],
    impact: '40% increase in team productivity, improved visual consistency',
    challenges: [
      'Creating a flexible system that adapts to different product needs',
      'Ensuring WCAG 2.1 AA compliance across all components',
      'Migrating existing products to the new system',
      'Maintaining backward compatibility during rollout'
    ],
    features: [
      '50+ reusable React components',
      'Automated accessibility testing',
      'Comprehensive documentation site',
      'Figma design library sync'
    ]
  },
  'real-time-analytics-dashboard': {
    title: 'Real-Time Analytics Dashboard',
    fullDescription: 'Developed a real-time analytics platform providing instant insights into product usage, user behavior, and business metrics. The dashboard supports customizable widgets, real-time alerts, and seamless integration with multiple data sources.',
    tech: ['Next.js', 'WebSockets', 'D3.js', 'Redis', 'ClickHouse'],
    impact: 'Instant insights for product and business teams',
    challenges: [
      'Processing and visualizing millions of events in real-time',
      'Maintaining sub-second latency for live updates',
      'Creating flexible, customizable dashboard widgets',
      'Optimizing data aggregation for performance'
    ],
    features: [
      'Live data visualization with WebSocket streaming',
      'Customizable dashboard widgets',
      'Automated alerting system',
      'Historical data analysis and comparisons'
    ]
  },
  'e-commerce-microservices-architecture': {
    title: 'E-Commerce Microservices Architecture',
    fullDescription: 'Architected and implemented a complete microservices ecosystem for a high-traffic e-commerce platform. The system handles inventory management, order processing, payments, and shipping with event-driven architecture and automated scaling.',
    tech: ['Go', 'Kubernetes', 'gRPC', 'MongoDB', 'Kafka', 'Redis'],
    impact: '99.99% uptime, 10x throughput improvement',
    challenges: [
      'Designing for eventual consistency across services',
      'Implementing distributed transaction management',
      'Ensuring data integrity across service boundaries',
      'Managing service discovery and load balancing'
    ],
    features: [
      'Event-driven architecture with Kafka',
      'Automated horizontal scaling',
      'Circuit breaker pattern for resilience',
      'Distributed tracing and monitoring'
    ]
  }
}

const project = projectsData[route.params.slug]

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}

useHead({
  title: project.title + ' | Diego Ramirez'
})
</script>
