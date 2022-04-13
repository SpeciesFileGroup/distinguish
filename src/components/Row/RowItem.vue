<template>
  <div>
    <span>
      <span
        v-if="row.errors"
        class="cursor-pointer"
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
