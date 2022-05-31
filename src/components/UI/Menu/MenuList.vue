<template>
  <ul class="menu-list">
    <slot/>
  </ul>
</template>


<style lang="scss">
.menu-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0px;

  li:first-child {
    padding-left: 0px;
  }
}
</style>