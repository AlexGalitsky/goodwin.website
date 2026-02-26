<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">About</h1>
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
              <p class="text-lg text-foreground leading-relaxed">
                I'm <span class="text-primary font-medium">Alex Galitsky</span>, a developer based in Krasnodar - Russia,  focused on building systems that scale, perform, and last. I work at the intersection of engineering, product, and design, turning complex problems into reliable digital solutions.
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-2">
              <p class="text-muted-foreground leading-relaxed">
                With years of experience in the industry, I've worked on everything from early-stage startups to enterprise-scale systems. My approach combines technical depth with product thinking — always focused on delivering real impact, not just shipping code.
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-3">
              <p class="text-muted-foreground leading-relaxed">
                I believe in writing code that's maintainable, documented, and built to evolve. Every system I design considers not just the current requirements, but how it will need to change and scale over time.
              </p>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-4">
              <div class="flex items-center gap-4 py-8">
                <span class="font-mono text-sm text-primary">//</span>
                <span class="font-mono text-sm text-muted-foreground">Philosophy</span>
                <div class="flex-1 h-px bg-border"></div>
              </div>
            </div>

            <div class="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> Build for reliability, not just speed
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> Measure impact, not just output
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> Simplify complexity, don't hide it
              </p>
              <p class="text-muted-foreground transition-colors hover:text-foreground">
                <span class="text-primary">//</span> Document decisions, not just code
              </p>
            </div>
          </div>

          <div class="space-y-8">
            <div class="opacity-0 animate-fade-in-up stagger-2">
              <h2 class="font-mono text-sm text-primary mb-4">
                <span class="text-muted-foreground">/*</span> Skills <span class="text-muted-foreground">*/</span>
              </h2>
              <ul class="space-y-2">
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>Systems Architecture
                </li>
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>Frontend Engineering
                </li>
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>API Design
                </li>
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>Performance Optimization
                </li>
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>Technical Leadership
                </li>
                <li class="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span class="text-primary mr-2">→</span>Product Development
                </li>
              </ul>
            </div>

            <div class="opacity-0 animate-fade-in-up stagger-3">
              <h2 class="font-mono text-sm text-primary mb-4">
                <span class="text-muted-foreground">/*</span> Stack <span class="text-muted-foreground">*/</span>
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
                <span class="text-muted-foreground">/*</span> Experience <span class="text-muted-foreground">*/</span>
              </h2>
              <div class="space-y-3 text-sm text-muted-foreground">
                <p>8+ years in software development</p>
                <p>Startups to enterprise scale</p>
                <p>Remote-first since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About | goodwin - Alex Galitsky'
})
</script>
