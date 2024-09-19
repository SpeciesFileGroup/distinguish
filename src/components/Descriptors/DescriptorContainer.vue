<template>
  <div
    :id="`descriptor-${descriptor.descriptorId}`"
    class="distinguish-descriptor-container"
  >
    <div class="distinguish-input-label">
      <span
        class="distinguish-link"
        @click="isModalVisible = true"
      >
        <slot name="title">
          {{ descriptor.name }}
        </slot>
      </span>
    </div>
    <slot />
    <DescriptorModal
      v-if="isModalVisible"
      :descriptor="descriptor"
      @close="isModalVisible = false"
    />
  </div>
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
