<template>
  <div id="vue-interactive-keys">
    <div class="flex-separate">
      <h1 class="task_header">
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

    <spinner-component
      v-if="isLoading"
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
import CitationLabel from './components/CitationLabel.vue'
import HeaderBar from './components/Header/HeaderBar.vue'
import PanelEliminated from './components/Panel/PanelEliminated.vue'
import PanelRemaining from './components/Panel/PanelRemaining.vue'
import PanelDescriptors from './components/Panel/PanelDescriptors/PanelDescriptors.vue'
import VGrid from './components/UI/VGrid.vue'

interface Props {
  startingMatrixId: number,
  visibleMatrices: Array<number>
}

const props = withDefaults(defineProps<Props>(), {
  startingMatrixId: 1,
  visibleMatrices: () => []
})

const settingStore = useSettingsStore()
const filterStore = useFilterStore()
const store = useObservationMatrixStore()
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

store.requestInteractiveKey({ observationMatrixId: props.startingMatrixId })

filterStore.$subscribe(() => {
  store.requestInteractiveKey({
    observationMatrixId: props.startingMatrixId,
    params: filterStore.getFilterParams
  })
})

</script>
