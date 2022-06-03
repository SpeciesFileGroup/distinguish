<template>
  <div>
    <h2>Eliminated ({{ eliminated.length }})</h2>
    <ul>
      <PanelRowItem
        v-for="item in eliminated"
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

const store = useObservationMatrixStore()
const eliminated = computed<Array<IRow>>(() => store.getEliminated)
</script>