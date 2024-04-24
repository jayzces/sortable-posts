<script setup lang="ts">
import type { Action } from '@/stores/types/action'
defineProps<{ actions: Action[] }>()
</script>

<template>
  <div class="actions bg-white rounded shadow-md">
    <h2 class="text-2xl font-semibold px-4 py-6">List of actions committed</h2>
    <div class="bg-zinc-100 p-4">
      <div
        class="action bg-white p-4 shadow-md flex justify-between items-center"
        v-for="(action, index) in actions"
        :key="action.id"
        :class="{
          'rounded-t': index === 0,
          'rounded-b': index === actions.length - 1,
          'border-t': index > 0
        }"
      >
        Moved Post {{ action.postId }} from index {{ action.indexFrom }} to index
        {{ action.indexTo }}

        <button
          class="bg-green-400 py-2 px-4 font-semibold rounded hover:bg-green-500 transition-colors duration-300"
        >
          Time travel
        </button>
      </div>
    </div>
  </div>
</template>
