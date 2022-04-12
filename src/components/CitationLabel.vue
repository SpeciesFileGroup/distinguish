<template>
  <span
    v-if="citation"
    :title="citation.label"
  >
    {{ citation.author }}, {{ citation.year }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObservationMatrixStore } from '../store/observationMatrices'

const store = useObservationMatrixStore()
const citation = computed(() => store.getCitation)

</script>
