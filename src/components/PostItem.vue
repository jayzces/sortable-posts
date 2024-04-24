<script setup lang="ts">
import type { Post } from '@/stores/types/post'
defineProps<{ post: Post }>()
</script>

<template>
  <div class="post py-8 px-4 bg-white shadow-md rounded text-lg hover:shadow-xl transition-shadow">
    Post {{ post.id }}
  </div>
</template>
