<template>
  <VBtn
    color="primary"
    size="medium"
    @click="store.$reset()"
  >
    Reset
  </VBtn>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/store/filter'
import VBtn from '../UI/VBtn.vue'

const store = useFilterStore()
</script>