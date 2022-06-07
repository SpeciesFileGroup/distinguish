<template>
  <div :id="`descriptor-${descriptor.descriptorId}`">
    <span class="d-block">
      <slot name="title">
        {{ descriptor.name }}
      </slot>
    </span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Descriptor } from '@/types'

defineProps<{
  descriptor: Descriptor
}>()
</script>
