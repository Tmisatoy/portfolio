<template>
  <div class="logo grid-item--left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    default: String
  }
};
</script>

<style scoped>
.logo {
  font-size: 55px;
  color: #333;
}
</style>