<template>
  <VPanel class="distinguish-panel-descriptors">
    <FilterRowCheckbox />
    <DescriptorsList
      v-if="store.getDescriptorsUsed.length"
      :descriptors="store.getDescriptorsUsed"
      title="Used Descriptors"
    />
    <DescriptorsList
      v-if="store.getDescriptorsUseful.length"
      :descriptors="store.getDescriptorsUseful"
      title="Descriptors Useful for Identification"
    />
    <DescriptorsList
      v-if="store.getDescriptorsUseless.length"
      :descriptors="store.getDescriptorsUseless"
      title="Descriptors no longer relevant for identification"
    />
  </VPanel>
</template>

<script setup lang="ts">
import { useObservationMatrixStore } from '@/store/observationMatrices'
import DescriptorsList from './DescriptorsList.vue'
import VPanel from '@/components/UI/VPanel.vue'
import FilterRowCheckbox from '@/components/Filter/FilterRowCheckbox.vue'

const store = useObservationMatrixStore()
</script>
