<template>
  <div class="vue-interactive-keys">
    <TitleKey />

    <HeaderBar />

    <VGrid
      class="w-100"
      :class="gridLayout"
    >
      <PanelDescriptors class="panel-descriptors grid-panel" />
      <PanelRemaining class="panel-remaining grid-panel" />
      <PanelEliminated class="panel-eliminated grid-panel" />
    </VGrid>

    <VSpinner
      v-if="isLoading"
      full-screen
      legend="Loading interactive key..."
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'InteractiveKey'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from './store/settings'
import { useFilterStore } from './store/filter'
import { IAPIConfiguration } from './interfaces'
import HeaderBar from './components/Header/HeaderBar.vue'
import PanelEliminated from './components/Panel/PanelEliminated.vue'
import PanelRemaining from './components/Panel/PanelRemaining.vue'
import PanelDescriptors from './components/Panel/PanelDescriptors/PanelDescriptors.vue'
import VGrid from './components/UI/VGrid.vue'
import VSpinner from '@/components/UI/VSpinner.vue'
import TitleKey from '@/components/Title/TitleKey.vue'

interface Props {
  observationMatrixId: number,
  apiConfig: IAPIConfiguration
}

const props = defineProps<Props>()
const settingStore = useSettingsStore()
const filterStore = useFilterStore()
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

const initialize = () => {
  settingStore.setAPIConfig(props.apiConfig)
  settingStore.setObservationMatrixId(props.observationMatrixId)
  settingStore.checkUpdate()
}

initialize()

filterStore.$subscribe(_ => {
  if (settingStore.shouldUpdate) {
    settingStore.checkUpdate()
  }
})

</script>
