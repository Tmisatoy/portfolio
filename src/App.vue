<template>
  <div id="app">
    <the-heading></the-heading>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeading from "./components/TheHeading";

export default {
  components: {
    TheHeading,
  },
};
</script>

<style lang="scss">
</style>
