<template>
  <VBtn
    color="primary"
    size="medium"
    @click="isModalVisible = true"
  >
    Select
  </VBtn>
  <VModal
    v-if="isModalVisible"
    @close="isModalVisible = false"
  >
    <template #header>
      <h3>Filter row</h3>
    </template>
    <template #body>
      <ul class="list-none p-0">
        <li
          v-for="row in store.getRemaining"
          :key="row.rowId"
        >
          <label>
            <input
              v-model="rowIds"
              :value="row.rowId"
              type="checkbox"
            >
            {{ row.objectLabel }}
          </label>
        </li>
      </ul>
    </template>
  </VModal>
</template>

<script setup lang="ts">
import { ref, computed, WritableComputedRef, watch } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { useFilterStore } from '@/store/filter'
import { useSettingsStore } from '@/store/settings'
import VBtn from '@/components/UI/VBtn.vue'
import VModal from '@/components/UI/VModal.vue'

const store = useObservationMatrixStore()
const settingStore = useSettingsStore()
const filterStore = useFilterStore()
const isModalVisible = ref(false)

const previousRowIds = ref<number[]>([])
const hasChanged = computed(() => {
  const newValue = filterStore.getRowIds
  const oldValue = previousRowIds.value
  
  return newValue.length !== oldValue.length || !newValue.every(id => oldValue.includes(id))
})

const rowIds: WritableComputedRef<number[]> = computed({
  get: (): Array<number> => filterStore.getRowIds,

  set: (value: Array<number>) => {
    filterStore.$patch({ rowIds: value })
  }
})

watch(
  isModalVisible,
  newValue => {
    settingStore.setShouldUpdate(!newValue)

    if (!newValue && hasChanged.value) {
      settingStore.checkUpdate()
    }

    previousRowIds.value = filterStore.getRowIds
  }
)
</script>