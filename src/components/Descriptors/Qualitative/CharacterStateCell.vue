<template>
  <div class="character-descriptor__cell">
    <label>
      <VDepiction
        v-for="depictionId in characterState.depictionIds"
        :key="depictionId"
        :depiction-id="depictionId"
      />
      <input 
        v-model="updateCharacterStateFilter"
        :value="characterState.characterStateId"
        type="checkbox"
      >
      {{ characterState.name }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue'
import { ICharacterState } from '@/interfaces'
import { useFilterStore } from '@/store/filter'
import VDepiction from '@/components/Depiction/VDepiction.vue'

interface Props {
  characterState: ICharacterState,
  descriptorId: number
}

const props = defineProps<Props>()
const store = useFilterStore()

const updateCharacterStateFilter: WritableComputedRef<number[]> = computed({
  get: () => store.getDescriptorValueById(props.descriptorId) as Array<number> || [],

  set: value => {
    if (value.length) {
      store.setDescriptor({ 
        descriptorId: props.descriptorId,
        value
      })
    } else {
      store.removeDescriptor(props.descriptorId)
    }
  }
})
</script>

<style lang="scss">
  .character-descriptor__cell {
    display: flex;
    align-items: flex-end;
  }
</style>