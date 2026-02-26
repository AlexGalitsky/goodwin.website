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
          <div class="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
            <span class="font-mono text-sm text-primary">
              <span class="text-muted-foreground">//</span> Impact: {{ project.impact }}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-4">
            <a 
              v-if="project.links?.appStore"
              :href="project.links.appStore"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-apple h-4 w-4 mr-2">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.385-2.376-2-.156-3.675 1.09-4.597 1.09zM15.532 3.752c.843-1.012 1.4-2.427 1.245-3.752-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.675 1.338.104 2.715-.675 3.57-1.688z"/>
              </svg>
              App Store
            </a>
            <a 
              v-if="project.links?.googlePlay"
              :href="project.links.googlePlay"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-mono"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-play h-4 w-4 mr-2">
                <path d="M5.255 5.702c-.217.11-.367.326-.396.575a.753.753 0 0 0 .003.096v11.714a.75.75 0 0 0 .393.671l10.5 5.25a.75.75 0 0 0 1.092-.671V4.473a.75.75 0 0 0-1.092-.671l-10.5 5.25z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-2">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Description</span>
            <div class="flex-1 h-px bg-border"></div>
          </div>
        </div>

        <div class="mb-12 opacity-0 animate-fade-in-up stagger-3">
          <p class="text-muted-foreground leading-relaxed">
            {{ project.detailedDescription }}
          </p>
        </div>

        <div class="opacity-0 animate-fade-in-up stagger-3">
          <div class="flex items-center gap-4 py-8">
            <span class="font-mono text-sm text-primary">//</span>
            <span class="font-mono text-sm text-muted-foreground">Key Features</span>
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
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()

const projectsData = {
  'taxymatch': {
    title: 'TaxyMatch',
    fullDescription: 'A specialized ride-sharing application designed for airport and train station transfers across France.',
    detailedDescription: 'TaxyMatch is a specialized ride-sharing application designed for airport and train station transfers across France. I developed the cross-platform mobile client using Flutter and contributed to the backend logic to ensure seamless matching between travelers and drivers for a reliable travel experience. The app handles real-time ride requests, driver tracking, and secure payment processing.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Seamless matching between travelers and drivers',
    features: [
      'Real-time ride matching algorithm',
      'GPS tracking for drivers and passengers',
      'Secure payment integration',
      'Multi-language support',
      'Airport and train station transfer specialization'
    ],
    links: {
      appStore: 'https://apps.apple.com/ru/app/taxymatch-taxi-vtc-partag%C3%A9/id1437408081',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.TaxyMatch.TaxyMatch2&hl=ru'
    }
  },
  'medtochka': {
    title: 'MedTochka (MedPoint)',
    fullDescription: 'A comprehensive patient portal developed for the "ProDoctors" platform.',
    detailedDescription: 'MedTochka is a comprehensive patient portal developed for the "ProDoctors" platform. This app allows users to search for medical specialists, manage appointments, and access healthcare information. I was responsible for building the mobile application to provide a smooth and intuitive user experience. The app integrates with the existing ProDoctors database and provides real-time appointment availability.',
    tech: ['Flutter', 'Django', 'PostgreSQL'],
    impact: 'Easy access to healthcare specialists',
    features: [
      'Search and filter medical specialists',
      'Online appointment booking',
      'Appointment reminders and notifications',
      'Medical records access',
      'Integration with ProDoctors platform'
    ],
    links: {
      appStore: 'https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B4%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%BA-%D0%B2%D1%80%D0%B0%D1%87%D1%83/id1591602076',
      googlePlay: 'https://play.google.com/store/apps/details?id=ru.medtochka&hl=ru'
    }
  },
  'rentout': {
    title: 'RentOut',
    fullDescription: 'A versatile property rental platform catering to both short-term and long-term housing needs.',
    detailedDescription: 'RentOut is a versatile property rental platform catering to both short-term and long-term housing needs. I built the mobile front-end with Flutter and integrated it with a Laravel backend, creating a robust marketplace for property owners and seekers to connect efficiently. The platform supports advanced search filters, virtual tours, and secure booking.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Efficient property marketplace',
    features: [
      'Advanced property search with filters',
      'Short-term and long-term rental options',
      'Virtual property tours',
      'Secure booking and payment',
      'Direct messaging between owners and renters'
    ],
    links: {
      appStore: 'https://apps.apple.com/ru/app/rentout-%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0-%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE/id6670768633',
      googlePlay: 'https://play.google.com/store/apps/details?id=one.rentout.rentout&hl=ru'
    }
  },
  'aquarius': {
    title: 'Aquarius (Vodoley)',
    fullDescription: 'An on-demand delivery application specifically for the bottled water market in Yakutsk.',
    detailedDescription: 'Aquarius (Vodoley) is an on-demand delivery application specifically for the bottled water market in Yakutsk. The app simplifies the process of ordering and scheduling regular water deliveries. I developed the full-stack solution, from the mobile interface to the order management system on the backend. The app supports subscription-based deliveries and real-time order tracking.',
    tech: ['Flutter', 'Laravel', 'PostgreSQL'],
    impact: 'Simplified water delivery scheduling',
    features: [
      'Easy water ordering interface',
      'Subscription-based delivery scheduling',
      'Real-time order tracking',
      'Multiple payment options',
      'Delivery history and reorder'
    ],
    links: {
      appStore: 'https://apps.apple.com/ru/app/%D0%B2%D0%BE%D0%B4%D0%BE%D0%BB%D0%B5%D0%B9-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B2%D0%BE%D0%B4%D1%8B-%D1%8F%D0%BA%D1%83%D1%82%D1%81%D0%BA/id6753923701',
      googlePlay: 'https://play.google.com/store/apps/details?id=monster.voda.vodoley&hl=ru'
    }
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
  title: project.title + ' | goodwin - Alex Galitsky'
})
</script>
