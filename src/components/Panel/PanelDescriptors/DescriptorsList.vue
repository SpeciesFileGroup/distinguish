<template v-if="descriptors.length">
  <h3>Descriptors</h3>
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
import { computed } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import DescriptorContinuous from '../../Descriptors/DescriptorContinuous.vue'
import DescriptorPresenceAbsence from '../../Descriptors/DescriptorPresenceAbsence.vue'
import DescriptorQualitative from '../../Descriptors/Qualitative/DescriptorQualitative.vue'
import DescriptorSample from '../../Descriptors/DescriptorSample.vue'

const store = useObservationMatrixStore()
const descriptors = computed<Array<Descriptor>>(() => store.descriptors)

const components: { [index: string]: Function } = {
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