<template>
  <ul class="distinguish-menu-list">
    <slot />
  </ul>
</template>

<style lang="scss">
.distinguish-menu-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0px;

  li:first-child {
    padding-left: 0px;
  }
}
</style>
