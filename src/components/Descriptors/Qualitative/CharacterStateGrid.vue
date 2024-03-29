<template>
  <div class="character-states-grid">
    <CharacterStateCell
      v-for="characterState in descriptor.characterStates"
      :key="characterState.characterStateId"
      :descriptor-id="descriptor.descriptorId"
      :character-state="characterState"
    />
  </div>
</template>

<script setup lang="ts">
import { IDescriptorQualitative } from '@/interfaces'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { DescriptorFilter } from '@/types'
import { useSettingsStore } from '@/store/settings'
import { useFilterStore } from '@/store/filter'
import CharacterStateCell from './CharacterStateCell.vue'

const props = defineProps<{
  descriptor: IDescriptorQualitative
}>()

const filterStore = useFilterStore()
const settingStore = useSettingsStore()
const descriptorFilter = ref<DescriptorFilter>()
const hasChanged = computed(() => {
  const newValue = filterStore.getDescriptorValueById(props.descriptor.descriptorId) as Array<number> || []
  const oldValue = descriptorFilter.value as Array<number> || []
  
  return newValue.length !== oldValue.length || !newValue.every(id => oldValue.includes(id))
})

onMounted(() => {
  settingStore.setShouldUpdate(false)
  descriptorFilter.value = filterStore.getDescriptorValueById(props.descriptor.descriptorId)
})

onUnmounted(() => {
  settingStore.setShouldUpdate(true)

  if (hasChanged.value) {
    settingStore.checkUpdate()
  }
})

</script>

<style lang="scss">
.character-states-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(33.33%, 1fr));
  gap: 1em;
}
</style>