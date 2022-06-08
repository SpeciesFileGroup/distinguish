<template v-if="descriptors.length">
  <h2>{{ title }}</h2>
  <ol>
    <li
      v-for="descriptor in descriptors"
      :key="descriptor.descriptorId"
    >
      <component
        :is="componentFor(descriptor.type)"
        :descriptor="descriptor"
      />
    </li>
  </ol>
</template>

<script setup lang="ts">

import { Descriptor } from '@/types'
import DescriptorContinuous from '../../Descriptors/DescriptorContinuous.vue'
import DescriptorPresenceAbsence from '../../Descriptors/DescriptorPresenceAbsence.vue'
import DescriptorQualitative from '../../Descriptors/Qualitative/DescriptorQualitative.vue'
import DescriptorSample from '../../Descriptors/DescriptorSample.vue'
import { defineComponent } from 'vue'

defineProps<{ 
  title: string,
  descriptors: Array<Descriptor>
}>()

const components: { [index: string]: ReturnType<typeof defineComponent> } = {
  DescriptorContinuous,
  DescriptorPresenceAbsence,
  DescriptorQualitative,
  DescriptorSample
}

const componentFor = (descriptorType: string) => {
  const componentName: string = descriptorType.replace('::', '')

  return components[componentName]
}
</script>