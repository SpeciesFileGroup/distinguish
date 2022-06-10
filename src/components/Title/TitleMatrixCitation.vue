<template>
  <span :title="citationLabel">
    {{ citationLabel }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'

const store = useObservationMatrixStore()
const citationLabel = computed(() => {
  const citation = store.getCitation

  return Object.values(citation || {})
    .filter(Boolean)
    .join(', ')
})

</script>
