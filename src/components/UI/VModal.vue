<template>
  <transition name="distinguish-modal">
    <div
      class="distinguish-modal-mask"
      @click="emit('close')"
      @key.esc="emit('close')"
    >
      <div class="distinguish-modal-wrapper">
        <div
          class="distinguish-modal-container"
          :class="containerClass"
          :style="{ ...containerStyle }"
          @click.stop
        >
          <div class="distinguish-modal-header">
            <div
              class="distinguish-modal-close"
              @click="emit('close')"
            />
            <slot name="header" />
          </div>
          <div class="distinguish-modal-body">
            <slot name="body" />
          </div>
          <div class="distinguish-modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface Props {
  containerClass?: string,
  containerStyle?: object
}

defineProps<Props>()

const emit = defineEmits(['close'])

const handleKeyboard = (event: KeyboardEvent) => {
  event.preventDefault()

  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => document.addEventListener('keydown', handleKeyboard))
onUnmounted(() => document.removeEventListener('keydown', handleKeyboard))
</script>
