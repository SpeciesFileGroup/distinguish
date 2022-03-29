<template v-if="descriptors.length">
  <h3>{{ title }}</h3>
  <ol>
    <li
      v-for="descriptor in descriptors"
      :key="descriptor.descriptorId">
      <component
        :descriptor="descriptor"
        :is="componentFor(descriptor)"/>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { Component } from 'vue'
import { Descriptor } from '../../../types';
import DescriptorContinuous from '../../Descriptors/DescriptorContinuous.vue'
import DescriptorPresenceAbsence from '../../Descriptors/DescriptorPresenceAbsence.vue'
import DescriptorQualitative from '../Descriptors/DescriptorQualitative.vue'
import DescriptorSample from '../../Descriptors/DescriptorSample.vue'

const props = defineProps<{
  descriptors: Array<Descriptor>,
  title: string
}>()

const components: { [index: string]: Component } = {
  DescriptorContinuous,
  DescriptorPresenceAbsence,
  DescriptorQualitative,
  DescriptorSample
}

const componentFor = (descriptor: Descriptor): Component => {
  const componentName: any = descriptor.type.replace('::', '')

  return components[componentName]
}
</script>