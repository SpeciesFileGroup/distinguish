<template>
  <descriptor-container :descriptor="descriptor">
    <select
      name="listbox"
      @change="setDescriptorValue"
    >
      <option value="" />
      <option
        v-for="characterState in descriptor.characterStates"
        :key="characterState.characterStateId"
        :value="characterState.characterStateId"
        :selected="selectedOption(characterState)"
      >
        <span v-if="selectedOption(characterState)">></span>
        <span v-if="characterState.status === StatusType.Useless">-</span>
        {{ characterState.name }} ({{ characterState.numberOfObjects }})
      </option>
    </select>
  </descriptor-container>
</template>

<script setup lang="ts">
import { IDescriptorQualitative, ICharacterState } from '@/interfaces'
import { useFilterStore } from '@/store/filter'
import { StatusType } from '@/constants/StatusType'
import DescriptorContainer from '../DescriptorContainer.vue'

const props = defineProps<{ descriptor: IDescriptorQualitative }>()
const useStore = useFilterStore()

const setDescriptorValue = (e: Event): void => {
  const target = e.target as HTMLSelectElement
  const { descriptorId } = props.descriptor

  if (target.value) {
    useStore.setDescriptor({ 
      descriptorId,
      value: [Number(target.value)]
    })
  } else {
    useStore.removeDescriptor(descriptorId)
  }
}

const selectedOption = (characterState: ICharacterState): boolean => {
  const storedValue = useStore.getDescriptorValueById(props.descriptor.descriptorId) as Array<number>

  return storedValue.includes(characterState.characterStateId)
}

</script>
