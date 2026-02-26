<template>
  <div>
    <section class="py-20">
      <div class="container">
        <div class="max-w-2xl mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h1>
          <p class="text-muted-foreground leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm always open to interesting conversations and collaborations.
          </p>
        </div>

        <div class="grid gap-16 lg:grid-cols-2">
          <div>
            <div class="flex items-center gap-4 py-8">
              <span class="font-mono text-sm text-primary">//</span>
              <span class="font-mono text-sm text-muted-foreground">Send a Message</span>
              <div class="flex-1 h-px bg-border"></div>
            </div>

            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="space-y-2">
                <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-sm" for="name">
                  <span class="text-primary">//</span> Name
                </label>
                <input 
                  class="flex h-10 w-full rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-card border-border font-mono text-sm"
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required
                  v-model="form.name"
                >
              </div>

              <div class="space-y-2">
                <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-sm" for="email">
                  <span class="text-primary">//</span> Email
                </label>
                <input 
                  type="email"
                  class="flex h-10 w-full rounded-md border px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-card border-border font-mono text-sm"
                  id="email" 
                  name="email" 
                  placeholder="your@email.com" 
                  required
                  v-model="form.email"
                >
              </div>

              <div class="space-y-2">
                <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono text-sm" for="message">
                  <span class="text-primary">//</span> Message
                </label>
                <textarea 
                  class="flex min-h-[80px] w-full rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-card border-border font-mono text-sm resize-none"
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project..." 
                  rows="6" 
                  required
                  v-model="form.message"
                ></textarea>
              </div>

              <button 
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 font-mono"
                type="submit"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send ml-2 h-4 w-4">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </button>
            </form>
          </div>

          <div>
            <div class="flex items-center gap-4 py-8">
              <span class="font-mono text-sm text-primary">//</span>
              <span class="font-mono text-sm text-muted-foreground">Connect</span>
              <div class="flex-1 h-px bg-border"></div>
            </div>

            <div class="space-y-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div class="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-mono text-sm text-foreground group-hover:text-primary transition-colors">GitHub</p>
                  <p class="font-mono text-xs text-muted-foreground">@developer</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div class="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <p class="font-mono text-sm text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                  <p class="font-mono text-xs text-muted-foreground">/in/developer</p>
                </div>
              </a>

              <a 
                href="mailto:hello@developer.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div class="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-mono text-sm text-foreground group-hover:text-primary transition-colors">Email</p>
                  <p class="font-mono text-xs text-muted-foreground">hello@developer.dev</p>
                </div>
              </a>
            </div>

            <div class="mt-8 p-4 bg-card border border-border rounded-lg">
              <p class="font-mono text-xs text-muted-foreground mb-2">
                <span class="text-primary">/*</span> Availability <span class="text-primary">*/</span>
              </p>
              <p class="text-sm text-foreground">
                Currently open to new opportunities and freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: Implement form submission
  alert('Thank you for your message! (Form submission not implemented yet)')
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}

useHead({
  title: 'Contact | Diego Ramirez'
})
</script>
