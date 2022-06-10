<template>
  <div>
    <div class="d-flex justify-between align-center">
      <h2>Remaining ({{ remaining.length }})</h2>
      <FilterRow />
    </div>
    <ul>
      <PanelRowItem
        v-for="item in remaining"
        :key="item.rowId"
        :row="item"
        class="margin-small-bottom"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { IRow } from '@/interfaces'
import PanelRowItem from './PanelRowItem.vue'
import FilterRow from '../Filter/FilterRow.vue'

const store = useObservationMatrixStore()
const remaining = computed<Array<IRow>>(() => store.getRemaining)
</script>
