<template>
  <div class="header-bar">
    <div />

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
        <FilterSort />
      </MenuListItem>
    </MenuList>

    <div>
      <GridToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterEliminateUnknowns from '../Filter/FilterEliminateUnknowns.vue'
import FilterErrorTolerance from '../Filter/FilterErrorTolerance.vue'
import FilterRank from '../Filter/FilterRank.vue'
import FilterSort from '../Filter/FilterSort.vue'
import SettingRefresh from '../Setting/SettingRefresh.vue'
import MenuList from '../UI/Menu/MenuList.vue'
import MenuListItem from '../UI/Menu/MenuItem.vue'
import GridToggle from './GridToggle.vue'
</script>

<style scoped lang="scss">
.header-bar {
  background-color: var(--background-panel);
  padding: 1em;
  box-shadow: rgb(36 37 38 / 8%) 4px 4px 15px 0px;
  border-radius: 0.9rem;
  display: flex;
  justify-content: space-between;
}

</style>