<script setup lang="ts"></script>

<template>
  <main class="min-h-screen">
    <div class="container py-10">
      <div class="grid grid-cols-2 gap-10">
        <div class="w-full">
          <h1 class="block text-3xl font-semibold text-white">Sortable Posts List</h1>

          <div class="list mt-6"></div>
        </div>

        <div class="w-full">hey</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply relative h-full before:content-[''] before:block before:absolute before:inset-x-0 before:bg-purple-800 before:h-1/3 before:z-[-1];
}

main::before {
  clip-path: polygon(0 0, 0 100%, 100% 0);
}
</style>
