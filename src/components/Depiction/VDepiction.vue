<template>
  <div
    v-if="depiction"
    class="depiction-box"
  >
    <img :src="depiction.imageUrl">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IDepiction } from '@/interfaces'
import { Depiction } from '@/services'
import { makeDepiction } from '@/adapters'

const props = defineProps<{ depictionId: number }>()
const depiction = ref<IDepiction>()

Depiction.find(props.depictionId).then(({ data }) => {
  depiction.value = makeDepiction(data)
})
</script>

<style lang="scss">
.depiction-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 300px;
  width: 300px;
}
</style>