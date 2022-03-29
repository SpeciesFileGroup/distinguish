<template>
  <descriptor-container :descriptor="descriptor">
    <select v-model="descriptorValue">
      <option :value="true">Present</option>
      <option :value="false">Absent</option>
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

const descriptorValue: WritableComputedRef<boolean> = computed({
  get: (): boolean => {
    return Boolean(useStore.getDescriptorValueById(props.descriptor.descriptorId))
  },

  set: (e: any) => {
    useStore.setDescriptor({ 
      descriptorId: props.descriptor.descriptorId,
      value: e.target.value
    })
  }
})
</script>
