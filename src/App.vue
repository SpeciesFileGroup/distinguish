<template>
  <div class="distinguish-app-container">
    <TitleKey />

    <HeaderBar />

    <VGrid :class="gridLayout">
      <PanelDescriptors />
      <PanelRemaining :render="props.renderItem">
        <template #default="slotProps">
          <slot
            name="remaining-item"
            v-bind="slotProps"
          />
        </template>
      </PanelRemaining>
      <PanelEliminated :render="props.renderItem">
        <template #default="slotProps">
          <slot
            name="eliminated-item"
            v-bind="slotProps"
          />
        </template>
      </PanelEliminated>
    </VGrid>

    <VSpinner
      v-if="isLoading"
      legend="Loading interactive key..."
    />
  </div>
</template>

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
  observationMatrixId: number
  apiConfig: IAPIConfiguration
  renderItem?: Function
}

defineOptions({
  name: 'Distinguish'
})

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

filterStore.$subscribe((_) => {
  if (settingStore.shouldUpdate) {
    settingStore.checkUpdate()
  }
})
</script>
