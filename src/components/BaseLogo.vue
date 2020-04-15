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

<style lang="scss">
.logo {
  font-size: 55px;
  color: $color-logo;
}
@include mq(sp) {
  .logo {
    font-size: 36px;
  }
}
</style>