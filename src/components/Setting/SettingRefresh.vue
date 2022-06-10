<template>
  <label>
    <input
      v-model="refreshTaxa"
      type="checkbox"
    >
    Refresh only taxa
  </label>
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue';
import { useSettingsStore } from '../../store/settings'

const store = useSettingsStore()

const refreshTaxa: WritableComputedRef<boolean> = computed({
  get: () => store.getRefreshOnlyTaxa,

  set: value => {
    store.setRefreshOnlyTaxa(value)
  }
})
</script>
