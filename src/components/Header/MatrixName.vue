<template>
  <div>
    <h2 class="matrix-name" v-if="store.getObservationMatrix">{{ store.getObservationMatrix.name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useObservationMatrixStore } from '@/store/observationMatrices'

const store = useObservationMatrixStore()
</script>

<style>
.matrix-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  max-width: 400px;
}
</style>