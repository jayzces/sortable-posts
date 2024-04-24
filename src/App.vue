<script setup lang="ts">
import ActionsList from './components/ActionsList.vue'
import PostItem from './components/PostItem.vue'
import type { Action } from './stores/types/action'
import type { Post } from './stores/types/post'

const posts: Post[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
const actions: Action[] = [
  { id: 1, postId: 1, indexFrom: 0, indexTo: 1 },
  { id: 2, postId: 2, indexFrom: 1, indexTo: 0 }
]
</script>

<template>
  <main class="min-h-screen">
    <div class="container py-10">
      <div class="grid grid-cols-2 gap-10">
        <div class="w-full">
          <h1 class="block text-3xl font-semibold text-white">Sortable Posts List</h1>

          <div class="list mt-6">
            <PostItem
              v-for="(post, index) in posts"
              :post="post"
              :first="index === 0"
              :last="index === posts.length - 1"
              :key="post.id"
            />
          </div>
        </div>

        <div class="w-full">
          <ActionsList :actions="actions" />
        </div>
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
