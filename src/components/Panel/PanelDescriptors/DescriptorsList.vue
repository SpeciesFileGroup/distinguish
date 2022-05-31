<template v-if="descriptors.length">
  <h3>{{ title }}</h3>
  <ol>
    <li
      v-for="descriptor in descriptors"
      :key="descriptor.descriptorId">
      <component
        :descriptor="descriptor"
        :is="componentFor(descriptor.type)"/>
    </li>
  </ol>
</template>

<script setup lang="ts">

import { Descriptor } from '../../../types'
import DescriptorContinuous from '../../Descriptors/DescriptorContinuous.vue'
import DescriptorPresenceAbsence from '../../Descriptors/DescriptorPresenceAbsence.vue'
import DescriptorQualitative from '../../Descriptors/Qualitative/DescriptorQualitative.vue'
import DescriptorSample from '../../Descriptors/DescriptorSample.vue'

defineProps<{
  descriptors: Array<Descriptor>,
  title: string
}>()

const components: { [index: string]: Function } = {
  DescriptorContinuous,
  DescriptorPresenceAbsence,
  DescriptorQualitative,
  DescriptorSample
}

const componentFor = (descriptorType: String) => {
  const componentName: any = descriptorType.replace('::', '')

  return components[componentName]
}
</script>