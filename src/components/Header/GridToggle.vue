<template>
  <VBtn
    :class="LAYOUT_MODES[gridLayout]"
    @click="setLayout"
  >
    <VGrid class="distinguish-grid-icon">
      <div class="distinguish-panel-descriptors" />
      <div class="distinguish-panel-remaining" />
      <div class="distinguish-panel-eliminated" />
    </VGrid>
  </VBtn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '../../store/settings'
import { LAYOUT_MODES } from '../../constants/LayoutModes'
import VBtn from '../UI/VBtn.vue'
import VGrid from '../UI/VGrid.vue'

const store = useSettingsStore()
const gridLayout = computed<string>(() => store.getLayout)

const setLayout = () => {
  store.$patch({
    gridLayout: LAYOUT_MODES[gridLayout.value]
  })
}
</script>
