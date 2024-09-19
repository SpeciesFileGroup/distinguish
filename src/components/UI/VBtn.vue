<template>
  <button
    type="button"
    class="distinguish-btn"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: string
  size?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'medium'
})

const buttonClasses = computed<Array<string>>(() => [
  `distinguish-btn-${props.color}-color`,
  `distinguish-btn-${props.size}-size`
])
</script>
