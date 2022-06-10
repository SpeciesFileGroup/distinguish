<template>
  <VBtn
    color="primary"
    size="medium"
    @click="isModalVisible = true"
  >
    Keyword
  </VBtn>
  <VModal
    v-if="isModalVisible"
    @close="isModalVisible = false"
  >
    <template #header>
      <h3>Keywords</h3>
    </template>
    <template #body>
      <ul class="list-none p-0">
        <li
          v-for="({ keywordId, name }) in store.getKeywords"
          :key="keywordId"
        >
          <label>
            <input
              v-model="keywordIds"
              :value="keywordId"
              type="checkbox"
            >
            {{ name }}
          </label>
        </li>
      </ul>
    </template>
  </VModal>
</template>

<script setup lang="ts">
import VBtn from '../UI/VBtn.vue'
import VModal from '../UI/VModal.vue'
import { computed, WritableComputedRef, ref } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { useFilterStore } from '@/store/filter'

const store = useObservationMatrixStore()
const filterStore = useFilterStore()
const isModalVisible = ref(false)

const keywordIds: WritableComputedRef<number[]> = computed({
  get: (): Array<number> => filterStore.getKeywordIds,

  set: (value) => {
    filterStore.$patch({ keywordIds: value })
  }
})

</script>