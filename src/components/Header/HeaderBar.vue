<template>
  <div class="distinguish-header-bar">
    <ErrorMessage />

    <MenuList>
      <MenuListItem>
        <SettingRefresh />
      </MenuListItem>
      <MenuListItem>
        <FilterEliminateUnknowns />
      </MenuListItem>
      <MenuListItem>
        <FilterErrorTolerance />
      </MenuListItem>
      <MenuListItem>
        <FilterRank />
      </MenuListItem>
      <MenuListItem>
        <FilterLanguage />
      </MenuListItem>
      <MenuListItem>
        <FilterSort />
      </MenuListItem>
      <MenuListItem>
        <FilterKeywords />
      </MenuListItem>
    </MenuList>

    <div class="distinguish-header-bar__buttons">
      <ResetButton />
      <GridToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterEliminateUnknowns from '../Filter/FilterEliminateUnknowns.vue'
import FilterErrorTolerance from '../Filter/FilterErrorTolerance.vue'
import FilterRank from '../Filter/FilterRank.vue'
import FilterSort from '../Filter/FilterSort.vue'
import FilterLanguage from '../Filter/FilterLanguage.vue'
import FilterKeywords from '../Filter/FilterKeywords.vue'
import SettingRefresh from '../Setting/SettingRefresh.vue'
import MenuList from '../UI/Menu/MenuList.vue'
import MenuListItem from '../UI/Menu/MenuItem.vue'
import GridToggle from './GridToggle.vue'
import ResetButton from './ResetButton.vue'
import ErrorMessage from './ErrorMessage.vue'
</script>
