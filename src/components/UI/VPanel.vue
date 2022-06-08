<template>
  <div class="panel">
    <slot />
  </div>
</template>

<style scoped>
.panel {
  background-color: var(--bg-panel-color);
  padding: 2em;
  box-shadow: rgb(36 37 38 / 8%) 4px 4px 15px 0px;
  border-radius: 0.9rem;
}
</style>