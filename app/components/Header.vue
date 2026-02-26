<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div class="container flex h-16 items-center justify-between">
      <NuxtLink 
        to="/" 
        class="font-mono text-sm font-medium text-primary hover:opacity-80 transition-opacity"
      >
        &lt;diego /&gt;
      </NuxtLink>
      
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink 
          to="/" 
          class="font-mono text-sm transition-colors hover:text-primary link-underline"
          :class="route.path === '/' ? 'text-primary' : 'text-muted-foreground'"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/work" 
          class="font-mono text-sm transition-colors hover:text-primary link-underline"
          :class="route.path.startsWith('/work') ? 'text-primary' : 'text-muted-foreground'"
        >
          Work
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          class="font-mono text-sm transition-colors hover:text-primary link-underline"
          :class="route.path === '/about' ? 'text-primary' : 'text-muted-foreground'"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="font-mono text-sm transition-colors hover:text-primary link-underline"
          :class="route.path === '/contact' ? 'text-primary' : 'text-muted-foreground'"
        >
          Contact
        </NuxtLink>
      </nav>

      <button 
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden text-foreground"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <span class="sr-only">Toggle menu</span>
      </button>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
