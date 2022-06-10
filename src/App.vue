<template>
  <div id="vue-interactive-keys">
    <div class="flex-separate">
      <h1>
        Interactive key <span v-if="store.getObservationMatrix">| {{ store.getObservationMatrix.name }}</span>
      </h1>
      <CitationLabel />
    </div>

    <HeaderBar class="margin-medium-bottom" />

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
import { useObservationMatrixStore } from './store/observationMatrices'
import { useFilterStore } from './store/filter'
import { IAPIConfiguration } from './interfaces'
import { useAPIConfig } from './composables/useAPIConfig'
import CitationLabel from './components/CitationLabel.vue'
import HeaderBar from './components/Header/HeaderBar.vue'
import PanelEliminated from './components/Panel/PanelEliminated.vue'
import PanelRemaining from './components/Panel/PanelRemaining.vue'
import PanelDescriptors from './components/Panel/PanelDescriptors/PanelDescriptors.vue'
import VGrid from './components/UI/VGrid.vue'
import VSpinner from '@/components/UI/VSpinner.vue'

interface Props {
  observationMatrixId: number,
  apiConfig: IAPIConfiguration
}

const props = withDefaults(defineProps<Props>(), {
  observationMatrixId: 1
})

const settingStore = useSettingsStore()
const filterStore = useFilterStore()
const store = useObservationMatrixStore()
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

const initialize = () => {
  const api = useAPIConfig()

  api.updatePreferences(props.apiConfig)

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
