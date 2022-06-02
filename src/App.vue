<template>
  <div id="vue-interactive-keys">
    <div class="flex-separate">
      <h1 class="task_header">
        Interactive key <span v-if="observationMatrix">| {{ observationMatrix.observation_matrix.name }}</span>
      </h1>
      <CitationLabel />
    </div>

    <HeaderBar class="margin-medium-bottom"/>

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

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from './store/settings'
import CitationLabel from './components/CitationLabel.vue'
import HeaderBar from './components/Header/HeaderBar.vue'
import PanelEliminated from './components/Panel/PanelEliminated.vue'
import PanelRemaining from './components/Panel/PanelRemaining.vue'
import PanelDescriptors from './components/Panel/PanelDescriptors/PanelDescriptors.vue'
import VGrid from './components/UI/VGrid.vue'

const settingStore = useSettingsStore()
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

</script>
