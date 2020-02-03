<template>
  <header class="header">
    <nav>
      <ul class="navigation">
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
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" }
      ]
    };
  }
};
</script>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
  color: green;
}
</style>

