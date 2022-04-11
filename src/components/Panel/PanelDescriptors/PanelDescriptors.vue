<template>
  <div class="descriptors-view">
    <FilterRowCheckbox/>
    <DescriptorsList 
      :descriptors="useStore.getDescriptorsUsed"
      title="Used Descriptors"
    />
    <DescriptorsList 
      :descriptors="useStore.getDescriptorsUseful"
      title="Descriptors Useful for Identification"
    />
    <DescriptorsList 
      :descriptors="useStore.getDescriptorsUseless"
      title="Descriptors no longer relevant for identification"
    />
  </div>
</template>

<script setup lang="ts">
import { useObservationMatrixStore } from '../../../store/observationMatrices'
import DescriptorsList from './DescriptorsList.vue'
import FilterRowCheckbox from './FilterRowCheckbox.vue'

const useStore = useObservationMatrixStore()
</script>
