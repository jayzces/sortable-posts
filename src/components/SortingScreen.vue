<script setup lang="ts">
import type { Action } from '@/stores/types/action'
import type { Post } from '@/stores/types/post'
import ActionsList from './ActionsList.vue'
import PostItem from './PostItem.vue'
import { ref } from 'vue'

const actions = ref<Action[]>([])
const posts = ref<Post[]>([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])

const movePost = (postId: number, movement: 'up' | 'down', generateActions = true) => {
  const index = posts.value.findIndex((p) => p.id === postId)
  const left = posts.value.slice(0, index)
  const right = posts.value.slice(index + 1)

  if (movement === 'down') {
    posts.value = [...left, right[0], posts.value[index], ...right.slice(1)].filter((p) => !!p)
    if (generateActions)
      actions.value = [
        { id: actions.value.length + 1, postId, indexFrom: index, indexTo: index + 1 },
        ...actions.value
      ]
  } else if (movement === 'up') {
    posts.value = [
      ...left.slice(0, left.length - 1),
      posts.value[index],
      left[left.length - 1],
      ...right
    ].filter((p) => !!p)

    if (generateActions)
      actions.value = [
        { id: actions.value.length + 1, postId, indexFrom: index, indexTo: index - 1 },
        ...actions.value
      ]
  }
}

const timeTravel = (actionIndex: number) => {
  const actionsToReverse = actions.value.slice(0, actionIndex + 1)

  for (let action of actionsToReverse) {
    if (action.indexFrom > action.indexTo) movePost(action.postId, 'down', false)
    else if (action.indexFrom < action.indexTo) movePost(action.postId, 'up', false)
  }

  actions.value = actions.value.slice(actionIndex + 1)
}
</script>

<template>
  <div class="container py-10">
    <div class="grid max-sm:auto-rows-auto sm:grid-cols-2 gap-10">
      <div class="w-full">
        <h1 class="block text-3xl font-semibold text-white">Sortable Posts List</h1>

        <div class="list mt-6">
          <PostItem
            v-for="(post, index) in posts"
            :post="post"
            :first="index === 0"
            :last="index === posts.length - 1"
            :key="post.id"
            @move="movePost(post.id, $event)"
            :latest="actions[0]?.postId === post.id"
          />
        </div>
      </div>

      <div class="w-full">
        <ActionsList :actions="actions" @travel="timeTravel" />
      </div>
    </div>
  </div>
</template>
