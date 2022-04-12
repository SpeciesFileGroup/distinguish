<template>
  <label>
    Refresh only taxa
    <input
      v-model="refreshTaxa"
      type="checkbox">
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSettingsStore } from '../../store/settings';

const store = useSettingsStore()

const refreshTaxa = computed<boolean>({
  get: () => store.getRefreshOnlyTaxa,

  set: value => {
    store.$patch({
      refreshOnlyTaxa: value
    })
  }
})
</script>
