<template>
  <div class="distinguish-app-container">
    <TitleKey />

    <HeaderBar />

    <VGrid :class="gridLayout">
      <PanelDescriptors />
      <PanelRemaining :render="props.renderItem">
        <template #remaining-row-filter="slotProps">
          <slot
            name="remaining-row-filter"
            v-bind="slotProps"
          />
        </template>
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
import { computed, watch } from 'vue'
import { createStores, provideStores } from './store'
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
  otuId?: number[]
}

defineOptions({
  name: 'Distinguish'
})

const props = defineProps<Props>()
const stores = createStores()
const { settings: settingStore, filter: filterStore } = stores
const isLoading = computed(() => settingStore.getIsLoading)
const gridLayout = computed(() => settingStore.getLayout)

provideStores(stores)

const initialize = () => {
  settingStore.setAPIConfig(props.apiConfig)

  settingStore.setObservationMatrixId(props.observationMatrixId)

  if (props.otuId) {
    settingStore.setOtuId(props.otuId)
  }

  settingStore.checkUpdate()
}

initialize()

watch(
  filterStore.state,
  () => {
    if (settingStore.getShouldUpdate) {
      settingStore.checkUpdate()
    }
  },
  { deep: true, flush: 'pre' }
)
</script>
