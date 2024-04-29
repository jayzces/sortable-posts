<script setup lang="ts">
import type { Post } from '@/stores/types/post'
defineProps<{
  post: Post
  first: boolean
  last: boolean
  latest?: boolean
}>()
</script>

<template>
  <div
    class="post px-4 py-2 min-h-[88px] md:min-h-[112px] bg-white shadow-md rounded text-xl transition-transform duration-300 flex justify-between items-center ease-in-out"
    :class="{ 'scale-105': latest }"
  >
    <div class="post__content">Post {{ post.id }}</div>

    <div class="text-purple-800 flex flex-col md:gap-4">
      <button class="post__move-up" v-if="!first" @click="$emit('move', 'up')">
        <span class="material-symbols-rounded text-[36px]">keyboard_arrow_up</span>
      </button>
      <button class="post__move-down" v-if="!last" @click="$emit('move', 'down')">
        <span class="material-symbols-rounded text-[36px]">keyboard_arrow_down</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply w-[36px] h-[36px] rounded-full hover:bg-purple-100 transition-colors duration-300;
}
</style>
