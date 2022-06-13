<template>
  <span class="error-message">
    {{ store.getErrorMessage }}
  </span>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/store/settings'

const store = useSettingsStore()
</script>
