<template>
  <h1 class="distinguish-title">
    Interactive key
    <span v-if="store.getObservationMatrix">| {{ store.getObservationMatrix.name }}</span>
  </h1>
</template>

<script setup lang="ts">
import { useObservationMatrixStore } from '@/store/observationMatrices'

const store = useObservationMatrixStore()
</script>
