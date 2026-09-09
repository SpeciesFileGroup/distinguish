<template>
  <label v-if="store.getRowIds.length">
    <input
      v-model="rowFilter"
      type="checkbox"
    />
    Filter
  </label>
</template>
<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue'
import { useFilterStore } from '../../store/filter'

const store = useFilterStore()

const rowFilter: WritableComputedRef<boolean> = computed({
  get: () => store.getRowFilter,
  set: (value) => store.setRowFilter(value)
})
</script>
