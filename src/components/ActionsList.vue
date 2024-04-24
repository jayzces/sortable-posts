<script setup lang="ts">
import type { Action } from '@/stores/types/action'
defineProps<{ actions: Action[] }>()
</script>

<template>
  <div class="actions bg-white rounded shadow-md">
    <h2 class="text-xl md:text-2xl font-semibold px-4 py-6">List of actions committed</h2>
    <div class="bg-zinc-100 p-4">
      <div
        class="action bg-white p-4 shadow-md flex justify-between items-center first:rounded-t last:rounded-b max-sm:flex-wrap gap-2"
        v-for="(action, index) in actions"
        :key="action.id"
        :class="{ 'border-t': index > 0 }"
      >
        Moved Post {{ action.postId }} from index {{ action.indexFrom }} to index
        {{ action.indexTo }}

        <button
          class="bg-green-400 py-2 px-4 font-semibold rounded hover:bg-green-500 transition-colors duration-300"
          @click="$emit('travel', index)"
        >
          Time travel
        </button>
      </div>

      <p v-if="actions.length === 0">No actions yet</p>
    </div>
  </div>
</template>
