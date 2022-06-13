<template>
  <button
    type="button"
    class="btn"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: string,
  size?: string,
  disabled?: boolean
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
  background-color: var(--primary-color);
  color: white;
}

.btn-medium-size {
  min-height: var(--btn-medium-size);
}

.btn:disabled {
  background-color: var(--bg-disabled-color);
  color: var(--disabled-color)
}
</style>