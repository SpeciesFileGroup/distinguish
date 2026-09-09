<template>
  <div
    v-if="depiction"
    class="distinguish-depiction-box"
  >
    <img :src="depiction.imageUrl">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IDepiction } from '@/interfaces'
import { Depiction } from '@/services'
import { makeDepiction } from '@/adapters'
import { useSettingsStore } from '@/store/settings'

const props = defineProps<{ depictionId: number }>()
const depiction = ref<IDepiction>()
const settingStore = useSettingsStore()

Depiction.find(props.depictionId, settingStore.getAPIConfig).then(({ data }) => {
  depiction.value = makeDepiction(data)
})
</script>
