<template>
  <div>
    <label
      for="languages"
      class="d-block"
    >
      Error tolerance
    </label>

    <select
      v-model="errorTolerance"
      name="languages"
      role="listbox"
    >
      <option value="" />
      <option 
        v-for="value in ERROR_TOLERANCE_VALUES"
        :key="value"
        :value="value"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/store/filter'
import { computed, WritableComputedRef } from 'vue'

const ERROR_TOLERANCE_VALUES = [0, 1, 2]

const filterStore = useFilterStore()
const errorTolerance: WritableComputedRef<number | undefined> = computed({
  get: () => filterStore.getErrorTolerance,

  set: error => {
    filterStore.setErrorTolerance(error)
  }
})



</script>