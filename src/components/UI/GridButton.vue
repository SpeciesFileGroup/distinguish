<template>
  <VBtn
    :class="LAYOUT_MODES[gridLayout]"
    @click="setLayout"
  >
    <VGrid class="grid-icon">
      <div class="panel-descriptors"/>
      <div class="panel-remaining"/>
      <div class="panel-eliminated"/>
    </VGrid>
  </VBtn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '../../store/settings'
import { LAYOUT_MODES } from '../../constants/LayoutModes'
import VBtn from './VBtn.vue'
import VGrid from './VGrid.vue'

const store = useSettingsStore()
const gridLayout = computed<string>(() => store.getLayout)

const setLayout = () => {
  store.$patch({
    gridLayout: LAYOUT_MODES[gridLayout.value]
  })
}

</script>

<style lang="scss">
.grid-icon {
  width: 20px;
  height: 12px;
  border: 2px solid transparent;
  background-color: transparent;
  grid-gap: 2px;

  > div {
    background-color: white;
  }
}
</style>