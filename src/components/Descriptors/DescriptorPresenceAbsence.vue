<template>
  <descriptor-container :descriptor="descriptor">
    <select v-model="descriptorValue">
      <option />
      <option 
        v-for="(value, option) in OPTIONS"
        :key="option"
        :value="value"
      >
        <span v-if="descriptor.status === StatusType.Useless">-</span>
        {{ option }} ({{ getNumberOfObjects(value) }})
      </option>
    </select>
  </descriptor-container>
</template>

<script setup lang="ts">
import { WritableComputedRef, computed } from 'vue'
import { IDescriptorPresenceAbsence, IDescriptorState } from '../../interfaces'
import { useFilterStore } from '../../store/filter'
import { StatusType } from '@/constants/StatusType'
import DescriptorContainer from './DescriptorContainer.vue'

const OPTIONS = {
  Presence: true,
  Absent: false
}

const props = defineProps<{
  descriptor: IDescriptorPresenceAbsence
}>()

const useStore = useFilterStore()

const descriptorValue: WritableComputedRef<boolean | undefined> = computed({
  get: (): boolean => {
    return useStore.getDescriptorValueById(props.descriptor.descriptorId) as boolean
  },

  set: (value: boolean) => {
    const { descriptorId } = props.descriptor

    if (typeof value === 'boolean') {
      useStore.setDescriptor({
        descriptorId: descriptorId,
        value: Boolean(value)
      })
    } else {
      useStore.removeDescriptor(descriptorId)
    }
  }
})

const getNumberOfObjects = (value: boolean): number => {
  const { states } = props.descriptor
  
  return states.find((s: IDescriptorState) => s.name === String(value))?.numberOfObjects || 0
}

</script>
