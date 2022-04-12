<template>
  <button
    type="button"
    :class="LAYOUT_MODES[gridLayout]"
    @click="setLayout"
  >
    <div class="i3-grid layout-mode-1 grid-icon">
      <div class="descriptors-view grid-item"/>
      <div class="taxa-remaining grid-item"/>
      <div class="taxa-eliminated grid-item"/>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '../../store/settings'
import { LAYOUT_MODES } from '../../constants/LayoutModes'

const store = useSettingsStore()
const gridLayout = computed<string>(() => store.getLayout)

const setLayout = () => {
  store.$patch({
    gridLayout: LAYOUT_MODES[gridLayout.value]
  })
}

</script>