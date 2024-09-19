<template>
  <label>
    <input
      v-model="rowFilter"
      type="checkbox"
    >
    Filter
  </label>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useSettingsStore } from '../../../store/settings';

const useStore = useSettingsStore()

const rowFilter = computed({
  get: () => useStore.getRowFilter,
  set: value => useStore.$patch({ rowFilter: value })
})
</script>