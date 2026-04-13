<template>
  <h1 class="distinguish-title">
    <span
      class="distinguish-observation-matrix-title"
      v-if="store.getObservationMatrix"
    >
      {{ store.getObservationMatrix.name }}
    </span>
    <TitleMatrixCitation />
  </h1>
</template>

<script setup lang="ts">
import TitleMatrixCitation from './TitleMatrixCitation.vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'

const store = useObservationMatrixStore()
</script>
