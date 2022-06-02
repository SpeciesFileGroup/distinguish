<template>
  <div>
    <label
      for="languages"
      class="d-block"
    >
      Languages
    </label>

    <select
      v-model="language"
      name="languages"
      role="listbox"
    >
      <option 
        v-for="({ languageId, name }) in store.getLanguages"
        :key="languageId"
        :value="languageId"
      >
        {{ name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/store/filter'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { computed, ref, WritableComputedRef } from 'vue'

const filterStore = useFilterStore()
const store = useObservationMatrixStore()

const language: WritableComputedRef<number | undefined> = computed({
  get: () => filterStore.getLanguageId,

  set: languageId => {
    filterStore.setLanguageId(Number(languageId))
  }
})

</script>