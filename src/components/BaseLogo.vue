<template>
  <div class="logo">
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
  font-size: 60px;
}
</style>