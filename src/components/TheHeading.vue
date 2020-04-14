<template>
  <header class="header">
    <nav class="menu">
      <ul>
        <li v-for="(item,index) in items" :key="index">
          <router-link
            :to="item.path"
            active-class="link--active"
            exact
            class="link"
          >{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeading",
  data() {
    return {
      items: [
        { title: "Top", path: "/" },
        { title: "Works", path: "/works" },
        { title: "Skills", path: "/skills" },
        { title: "Blog", path: "/blog" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 50px;
  right: 45px;
  font-size: 18px;
}

.link {
  color: $color-black;
}
.link--active {
  color: $color-black;
}
</style>

