<template>
  <label>
    <input
      v-model="eliminateUknown"
      type="checkbox"
    >
    Eliminate unknowns
  </label>
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue'
import { useFilterStore } from '../../store/filter'

const store = useFilterStore()

const eliminateUknown: WritableComputedRef<boolean>  = computed({
  get: (): boolean  => !!store.getEliminateUknown,

  set: (value: boolean) => {
    store.setEliminateUnknown(value)
  }
})
</script>
