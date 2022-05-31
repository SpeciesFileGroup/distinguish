<template>
  <button
    type="button"
    class="btn"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: string,
  size?: string
}

const { 
  color = 'primary',
  size = 'medium'
} = defineProps<Props>()

const buttonClasses = computed<Array<string>>(() => [
  `btn-${color}-color`,
  `btn-${size}-size`
])

</script>

<style lang="scss">

.btn {
  border-radius: 8px;
  border: 0px;
}

.btn-primary-color {
  background-color: var(--btn-primary-color);
}

.btn-medium-size {
  min-height: var(--btn-medium-size);
}
</style>