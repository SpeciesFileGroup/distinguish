<template>
  <div>
    <label class="display-block">Descriptor sorting</label>
    <select v-model="sortDescriptors">
      <option :value="undefined"></option>
      <option
        v-for="rank in SORT_TYPES"
        :key="rank">
        {{ rank }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { WritableComputedRef, computed } from 'vue'
import { useFilterStore } from '../../store/filter';

const SORT_TYPES: Array<string> = [
  'ordered',
  'weighted',
  'optimized'
]

const store = useFilterStore()

const sortDescriptors: WritableComputedRef<string | undefined> = computed({
  get () {
    return store.getSorting
  },

  set (value) {
    store.$patch({ sorting: value })
  }
})

</script>