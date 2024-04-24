<script setup lang="ts">
import SortingScreen from './components/SortingScreen.vue'
</script>

<template>
  <main class="min-h-screen">
    <SortingScreen />
  </main>
</template>

<style scoped>
main {
  @apply relative h-full before:content-[''] before:block before:absolute before:inset-x-0 before:bg-purple-800 before:max-h-[320px] before:h-[33.33vh] before:z-[-1];
}

main::before {
  clip-path: polygon(0 0, 0 100%, 100% 0);
}

/* SM breakpoint */
@media all and (max-width: 640px) {
  main::before {
    clip-path: polygon(0 0, 0 100%, 150% 0);
  }
}
</style>
