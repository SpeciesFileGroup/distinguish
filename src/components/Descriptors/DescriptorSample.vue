<template>
  <descriptor-container :descriptor="descriptor">
    <template #title>
      {{ descriptor.name }} ({{ descriptor.min }}-{{ descriptor.max }} {{ descriptor.defaultUnit }})
    </template>
    <input
      v-model="fieldValue"
      type="text"
      @blur="setDescriptorValue"
      @keyup.enter="setDescriptorValue"
    >
  </descriptor-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IDescriptorSample } from '@/interfaces'
import { useFilterStore } from '@/store/filter'
import DescriptorContainer from './DescriptorContainer.vue'

const props = defineProps<{
  descriptor: IDescriptorSample
}>()

const useStore = useFilterStore()
const fieldValue = ref<string>(String(useStore.getDescriptorValueById(props.descriptor.descriptorId)))

const setDescriptorValue = () => {
  const { descriptorId } = props.descriptor
  const value = fieldValue.value.trim()

  if (value) {
    useStore.setDescriptor({
      descriptorId: descriptorId,
      value
    })
  } else {
    useStore.removeDescriptor(descriptorId)
  }
}

</script>
