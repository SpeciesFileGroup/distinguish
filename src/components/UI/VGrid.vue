<template>
  <div class="grid">
    <slot/>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-gap: 1px;
  background-color: var(--border-color);
  box-shadow: 0px 1px 1px 0px rgb(0 0 0 / 20%);
}
</style>