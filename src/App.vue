<template>
  <div id="vue-interactive-keys">
    <div class="flex-separate">
      <h1 class="task_header">
        Interactive key <span v-if="observationMatrix">| {{ observationMatrix.observation_matrix.name }}</span>
      </h1>
      <CitationLabel />
    </div>

    <menu-bar/>

    <div class="full-height">
      <spinner-component
        v-if="isLoading"
        legend="Loading interactive key..."
      />
      <div
        class="i3-grid full-height"
        :class="gridLayout"
      >
        <DescriptorsView class="descriptors-view grid-item content" />
        <RemainingComponent class="taxa-remaining grid-item content" />
        <EliminatedComponent class="taxa-eliminated grid-item content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from './store/settings'
import CitationLabel from './components/CitationLabel.vue'

const settingStore = useSettingsStore()
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

</script>
