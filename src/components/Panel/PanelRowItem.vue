<template>
  <li v-html="row.objectTag" />
</template>

<script setup lang="ts">
import { IRow } from '@/interfaces'

interface Props {
  row: IRow
}

defineProps<Props>()

</script>