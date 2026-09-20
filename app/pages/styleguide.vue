<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="max-w-2xl mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Styleguide</h1>
          <p class="text-muted-foreground leading-relaxed">
            Design system documentation. A reference for colors, typography, and reusable components that make up this portfolio.
          </p>
        </div>

        <!-- Colors -->
        <div class="flex items-center gap-4 py-8">
          <span class="font-mono text-sm text-primary">//</span>
          <span class="font-mono text-sm text-muted-foreground">Colors</span>
          <div class="flex-1 h-px bg-border"></div>
        </div>

        <div class="grid gap-4 md:grid-cols-4 mb-16">
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-background border border-border"></div>
            <p class="font-mono text-xs text-muted-foreground">--background</p>
            <p class="font-mono text-xs text-foreground">Deep Black</p>
          </div>
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-card border border-border"></div>
            <p class="font-mono text-xs text-muted-foreground">--card</p>
            <p class="font-mono text-xs text-foreground">Graphite</p>
          </div>
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-primary"></div>
            <p class="font-mono text-xs text-muted-foreground">--primary</p>
            <p class="font-mono text-xs text-foreground">Neon Green</p>
          </div>
          <div class="space-y-2">
            <div class="h-20 rounded-lg bg-muted border border-border"></div>
            <p class="font-mono text-xs text-muted-foreground">--muted</p>
            <p class="font-mono text-xs text-foreground">Subtle Gray</p>
          </div>
        </div>

        <!-- Typography -->
        <div class="flex items-center gap-4 py-8">
          <span class="font-mono text-sm text-primary">//</span>
          <span class="font-mono text-sm text-muted-foreground">Typography</span>
          <div class="flex-1 h-px bg-border"></div>
        </div>

        <div class="space-y-8 mb-16">
          <div class="space-y-4">
            <p class="font-mono text-xs text-primary">/* Headings - Inter */</p>
            <h1 class="text-4xl font-bold">Heading 1</h1>
            <h2 class="text-3xl font-bold">Heading 2</h2>
            <h3 class="text-2xl font-semibold">Heading 3</h3>
            <h4 class="text-xl font-semibold">Heading 4</h4>
          </div>

          <div class="space-y-4">
            <p class="font-mono text-xs text-primary">/* Body - Inter */</p>
            <p class="text-base text-foreground">Body text in regular weight. Used for paragraphs and main content.</p>
            <p class="text-sm text-muted-foreground">Smaller muted text for secondary information and descriptions.</p>
          </div>

          <div class="space-y-4">
            <p class="font-mono text-xs text-primary">/* Mono - JetBrains Mono */</p>
            <p class="font-mono text-base">Monospace text for code and technical details.</p>
            <p class="font-mono text-sm text-muted-foreground">// Comments and syntax-style elements</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-4 py-8">
          <span class="font-mono text-sm text-primary">//</span>
          <span class="font-mono text-sm text-muted-foreground">Buttons</span>
          <div class="flex-1 h-px bg-border"></div>
        </div>

        <div class="flex flex-wrap gap-4 mb-16">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Primary Button
          </button>
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
            Secondary
          </button>
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Outline
          </button>
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Ghost
          </button>
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
            Link
          </button>
        </div>

        <!-- Cards -->
        <div class="flex items-center gap-4 py-8">
          <span class="font-mono text-sm text-primary">//</span>
          <span class="font-mono text-sm text-muted-foreground">Cards</span>
          <div class="flex-1 h-px bg-border"></div>
        </div>

        <div class="grid gap-4 md:grid-cols-2 mb-16">
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
            </div>
            <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">Card content with muted text for descriptions and supporting information.</p>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/50">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Highlighted Card</h3>
            </div>
            <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">Card with accent border for emphasis and interactive states.</p>
            </div>
          </div>
        </div>

        <!-- Labels & Tags -->
        <div class="flex items-center gap-4 py-8">
          <span class="font-mono text-sm text-primary">//</span>
          <span class="font-mono text-sm text-muted-foreground">Labels & Tags</span>
          <div class="flex-1 h-px bg-border"></div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <p class="font-mono text-xs text-muted-foreground">Code Labels</p>
            <div class="flex flex-wrap gap-4">
              <span class="inline-flex items-center font-mono text-xs text-primary">
                <span class="text-muted-foreground">/*</span>
                <span class="mx-2">Featured</span>
                <span class="text-muted-foreground">*/</span>
              </span>
              <span class="inline-flex items-center font-mono text-xs text-primary">
                <span class="text-muted-foreground">/*</span>
                <span class="mx-2">New</span>
                <span class="text-muted-foreground">*/</span>
              </span>
              <span class="inline-flex items-center font-mono text-xs text-primary">
                <span class="text-muted-foreground">/*</span>
                <span class="mx-2">In Progress</span>
                <span class="text-muted-foreground">*/</span>
              </span>
            </div>
          </div>

          <div class="space-y-2">
            <p class="font-mono text-xs text-muted-foreground">Tech Tags</p>
            <div class="flex flex-wrap gap-2">
              <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                React
              </span>
              <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                TypeScript
              </span>
              <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                Node.js
              </span>
              <span class="inline-flex items-center px-2 py-1 font-mono text-xs text-muted-foreground bg-secondary rounded-sm border border-border">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Styleguide | goodwin - Alex Galitsky'
})
</script>
