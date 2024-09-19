<template>
  <VPanel class="distinguish-panel-remaining">
    <div class="distinguish-title-section">
      <h2>Remaining ({{ remaining.length }})</h2>
      <FilterRow />
    </div>
    <ul>
      <li
        v-for="item in remaining"
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
import FilterRow from '../Filter/FilterRow.vue'

interface Props {
  render?: Function
}

defineProps<Props>()

const store = useObservationMatrixStore()
const remaining = computed<Array<IRow>>(() => store.getRemaining)
</script>
