<template>
  <VModal>
    <template #header>
      <h3>{{ descriptor.name }}</h3>
    </template>
    <template #body>
      <CharacterStateGrid
        v-if="descriptor.type === descriptorTypes.Qualitative"
        :descriptor="(descriptor as IDescriptorQualitative)" 
      />
    </template>
  </VModal>
</template>

<script setup lang="ts">
import { IDescriptorQualitative } from '@/interfaces'
import { Descriptor } from '@/types'
import VModal from '@/components/UI/VModal.vue'
import CharacterStateGrid from './Qualitative/CharacterStateGrid.vue'
import descriptorTypes from '@/constants/DescriptorTypes'

defineProps<{
  descriptor: Descriptor
}>()

</script>