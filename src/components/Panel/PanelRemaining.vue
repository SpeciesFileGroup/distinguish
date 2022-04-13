<template>
  <div>
    <h2>Remaining ({{ remaining.length }})</h2>
    <ul>
      <li
        class="margin-small-bottom"
        v-for="item in remaining"
        :key="item.object.id">
        <row-component :row="item"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useObservationMatrixStore } from '../../store/observationMatrices'

const store = useObservationMatrixStore()
const remaining = computed(() => store.getRemaining)

</script>
