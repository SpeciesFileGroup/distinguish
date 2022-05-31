<template>
  <descriptor-container :descriptor="descriptor">
    <select @change="setDescriptorValue">
      <option :value="undefined"/>
      <option
        v-for="characterState in descriptor.characterStates"
        :key="characterState.characterStateId"
        :value="characterState.characterStateId"
        :selected="selectedOption(characterState)"
      >
        <span v-if="selectedOption(characterState)">></span>
        <span v-if="characterState.status === 'useless'">-</span>
        {{ characterState.name }} ({{ characterState.numberOfObjects }})
      </option>
    </select>
  </descriptor-container>
</template>

<script setup lang="ts">
import { IDescriptorQualitative, ICharacterState } from '../../../interfaces';
import { useFilterStore } from '../../../store/filter'
import DescriptorContainer from '../DescriptorContainer.vue'

const props = defineProps<{
  descriptor: IDescriptorQualitative
}>()

const useStore = useFilterStore()

const setDescriptorValue = (e: any) => {
  useStore.setDescriptor({ 
    descriptorId: props.descriptor.descriptorId,
    value: [e.target.value]
  })
}

const selectedOption = (characterState: ICharacterState): boolean => {
  const storedValue = useStore.getDescriptorValueById(props.descriptor.descriptorId)

  return storedValue?.includes(characterState.characterStateId)
}

</script>
