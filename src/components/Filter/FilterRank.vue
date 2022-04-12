<template>
  <div>
    <label class="display-block">Identified to rank</label>
    <select v-model="rankSelected">
      <option :value="undefined"></option>
      <option
        v-for="rank in RANK_TYPES"
        :key="rank">
        {{ rank }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { WritableComputedRef, computed } from 'vue'
import { useFilterStore } from '../../store/filter';
import { RANK_TYPES } from '../../constants/rankTypes';

const store = useFilterStore()

const rankSelected: WritableComputedRef<string | undefined> = computed({
  get () {
    return store.getIdentifiedToRank
  },

  set (value) {
    store.$patch({ identifiedToRank: value })
  }
})

</script>