<template>
  <div class="descriptors-view">
    <DescriptorsList
      v-if="useStore.getDescriptorsUsed.length"
      :descriptors="useStore.getDescriptorsUsed"
      title="Used Descriptors"
    />
    <DescriptorsList
      v-if="useStore.getDescriptorsUseful.length"
      :descriptors="useStore.getDescriptorsUseful"
      title="Descriptors Useful for Identification"
    />
    <DescriptorsList
      v-if="useStore.getDescriptorsUseless.length"
      :descriptors="useStore.getDescriptorsUseless"
      title="Descriptors no longer relevant for identification"
    />
  </div>
</template>

<script setup lang="ts">
import { useObservationMatrixStore } from '@/store/observationMatrices'
import DescriptorsList from './DescriptorsList.vue'

const useStore = useObservationMatrixStore()
</script>
