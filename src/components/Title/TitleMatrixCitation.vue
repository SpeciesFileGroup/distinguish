<template>
  -
  <span
    class="distinguish-title-citation"
    :title="citationLabel"
    v-html="citationLabel"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'

const store = useObservationMatrixStore()
const citationLabel = computed(() => {
  const citation = store.getCitation

  return citation?.label
})
</script>
