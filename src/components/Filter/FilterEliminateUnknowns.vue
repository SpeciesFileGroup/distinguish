<template>
  <label>
    Eliminate unknowns
    <input
      v-model="eliminateUknown"
      type="checkbox">
  </label>
</template>

<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue';
import { useFilterStore } from '../../store/filter';

const store = useFilterStore()

const eliminateUknown: WritableComputedRef<boolean>  = computed({
  get: (): boolean  => !!store.getEliminateUknown,

  set: (value: boolean) => {
    store.$patch({ eliminateUknown: value })
  }
})
</script>
