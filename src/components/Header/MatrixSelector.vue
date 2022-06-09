<template>
  <div>
    <label
      for="matrixselector"
      class="d-block"
    >
      Matrix selector
    </label>
    <select 
      v-model="updateMatrix"
      role="listbox"
      name="matrixselector"
    >
      <option
        v-for="matrixId in visibleMatrices"
        :key="matrixId"
        :value="matrixId"
      >
        {{ matrixId }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue'
import { useSettingsStore } from '@/store/settings'
import matricesConfiguration from '@/config/matrices'

const store = useSettingsStore()
const updateMatrix: WritableComputedRef<number | undefined> = computed({
  get: () => store.getObservationMatrixId,

  set: (matrixId) => {
    store.setObservationMatrixId(Number(matrixId))
    store.checkUpdate()
  }
})

const { visibleMatrices = [] } = matricesConfiguration
</script>