<template>
  <VPanel class="distinguish-panel-eliminated">
    <h2>Eliminated ({{ eliminated.length }})</h2>
    <ul>
      <li
        v-for="item in eliminated"
        :key="item.rowId"
        class="distinguish-row-item"
      >
        <slot :item="item">
          <span v-html="render ? render(item) : item.objectTag" />
        </slot>
      </li>
    </ul>
  </VPanel>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useObservationMatrixStore } from '@/store/observationMatrices'
import { IRow } from '@/interfaces'
import VPanel from '../UI/VPanel.vue'

interface Props {
  render?: Function
}

defineProps<Props>()

const store = useObservationMatrixStore()
const eliminated = computed<Array<IRow>>(() => store.getEliminated)
</script>
