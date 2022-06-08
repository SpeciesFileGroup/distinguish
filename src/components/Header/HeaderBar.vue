<template>
  <div class="header-bar">
    <VAutocomplete
      label="label"
      query-param="term"
      placeholder="Search an observation matrix..."
      url="/observation_matrices/autocomplete"
      :min="2"
    />

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

    <div class="header-bar__buttons">
      <ResetButton class="margin-small-right" />
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
import VAutocomplete from '../UI/VAutocomplete.vue'
import ResetButton from './ResetButton.vue'

</script>

<style scoped lang="scss">
.header-bar {
  background-color: var(--bg-panel-color);
  padding: 1em;
  box-shadow: rgb(36 37 38 / 8%) 4px 4px 15px 0px;
  border-radius: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__buttons {
    display: flex;
    align-items: center;
  }
}

</style>