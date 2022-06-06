<template>
  <div :id="`descriptor-${descriptor.descriptorId}`">
    <h3>
      <slot name="title">
        {{ descriptor.name }}
      </slot>
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Descriptor } from '@/types'

defineProps<{
  descriptor: Descriptor
}>()
</script>
