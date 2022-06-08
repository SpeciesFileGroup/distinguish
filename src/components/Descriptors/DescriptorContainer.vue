<template>
  <div :id="`descriptor-${descriptor.descriptorId}`">
    <div class="d-block">
      <span
        class="link"
        @click="isModalVisible = true"
      >
        <slot name="title">
          {{ descriptor.name }}
        </slot>
      </span>
    </div>
    <slot />
  </div>

  <DescriptorModal
    v-if="isModalVisible"
    :descriptor="descriptor"
    @close="isModalVisible = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Descriptor } from '@/types'
import DescriptorModal from './DescriptorModal.vue'

defineProps<{
  descriptor: Descriptor
}>()

const isModalVisible = ref<boolean>(false)

</script>
