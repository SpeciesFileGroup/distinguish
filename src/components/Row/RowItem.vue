<template>
  <div>
    <span>
      <span
        v-if="row.errors"
        class="distinguish-row-item-error"
      >
        ({{ row.errors }})
      </span>
      <span v-html="row.objectTag" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { IRow } from '../../interfaces'

defineProps<{ row: IRow }>()
</script>
