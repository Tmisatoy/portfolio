<template>
  <div id="app">
    <the-heading></the-heading>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeading from "./components/TheHeading";
import "normalize.css";
import "./css/common.css";

export default {
  components: {
    TheHeading
  }
};
</script>

<style>
/*global CSS*/

*,
*:before,
*:after {
  box-sizing: border-box;
  background-color: #e7fff6;
}
#app {
  font-family: "Josefin Sans", sans-serif;
}
</style>
