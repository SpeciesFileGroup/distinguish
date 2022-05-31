<template>
  <li class="list-item">
    <slot />
  </li>
</template>

<style scoped lang="scss">
.list-item {
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  border-right: 1px solid #e5e5e5;
}
</style>