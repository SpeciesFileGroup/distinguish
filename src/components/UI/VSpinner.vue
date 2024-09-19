<template>
  <transition name="fade">
    <div class="distinguish-spinner-container">
      <div>
        <div class="distinguish-spinner" />
        <div class="distinguish-spinner-legend">
          <span v-html="legend" />
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  legend: {
    type: String,
    default: 'Loading, please wait.'
  }
})
</script>
