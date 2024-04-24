<script setup lang="ts">
import type { Post } from '@/stores/types/post'
defineProps<{
  post: Post
  first: boolean
  last: boolean
}>()
</script>

<template>
  <div
    class="post px-4 py-2 min-h-[112px] bg-white shadow-md rounded text-xl hover:shadow-xl transition-shadow mt-6 duration-500 flex justify-between items-center"
  >
    Post {{ post.id }}

    <div class="buttons text-purple-800 flex flex-col gap-4">
      <button v-if="!first">
        <span class="material-symbols-rounded text-[36px]">keyboard_arrow_up</span>
      </button>
      <button v-if="!last">
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
