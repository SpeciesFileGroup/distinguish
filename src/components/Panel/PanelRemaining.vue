<template>
  <div>
    <h2>Remaining ({{ remaining.length }})</h2>
    <ul>
      <li
        class="margin-small-bottom"
        v-for="item in remaining"
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
const remaining = computed<Array<IRow>>(() => store.getRemaining)

</script>
