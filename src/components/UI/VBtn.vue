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

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'medium'
})

const buttonClasses = computed<Array<string>>(() => [
  `btn-${props.color}-color`,
  `btn-${props.size}-size`
])

</script>

<style lang="scss">

.btn {
  border-radius: 8px;
  border: none;
}

.btn-primary-color {
  background-color: var(--btn-primary-color);
}

.btn-medium-size {
  min-height: var(--btn-medium-size);
}
</style>