<template>
  <descriptor-container :descriptor="descriptor">
    <select v-model="descriptorValue">
      <option />
      <option :value="true">
        Present
      </option>
      <option :value="false">
        Absent
      </option>
    </select>
  </descriptor-container>
</template>

<script setup lang="ts">
import { WritableComputedRef, computed } from 'vue'
import { IDescriptorPresenceAbsence } from '../../interfaces';
import { useFilterStore } from '../../store/filter'
import DescriptorContainer from './DescriptorContainer.vue'

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
</script>
