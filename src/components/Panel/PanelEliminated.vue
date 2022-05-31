<template>
  <div>
    <h2>Eliminated ({{ eliminated.length }})</h2>
    <ul>
      <li
        class="margin-small-bottom"
        v-for="item in eliminated"
        :key="item.rowId">
        <row-component :row="item"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useObservationMatrixStore } from '../../store/observationMatrices'
import { IRow } from '../../interfaces';

const store = useObservationMatrixStore()
const eliminated = computed<Array<IRow>>(() => store.getEliminated)

</script>