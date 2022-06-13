<template>
  <VModal container-class="descriptor-modal">
    <template #header>
      <h3>{{ descriptor.name }}</h3>
      <span v-if="descriptor.description">
        {{ descriptor.description }}
      </span>
      <i v-else>
        No further description available.
      </i>
    </template>
    <template #body>
      <div class="descriptor-modal__depiction">
        <VDepiction
          v-for="depictionId in descriptor.depictionIds"
          :key="depictionId"
          :depiction-id="depictionId"
        />
      </div>
      <hr>
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
import VDepiction from '@/components/Depiction/VDepiction.vue'
import VModal from '@/components/UI/VModal.vue'
import CharacterStateGrid from './Qualitative/CharacterStateGrid.vue'
import descriptorTypes from '@/constants/DescriptorTypes'

defineProps<{
  descriptor: Descriptor
}>()

</script>

<style lang="scss">
  .descriptor-modal {
    width: 1000px;
    max-height: 90vh;
    overflow-y: scroll;

    &__depiction {
      display: flex;
      justify-content: center;
    }
  }
</style>