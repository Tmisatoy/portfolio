import Vue from "vue";
import Router from "vue-router";
import Top from "./views/Top.vue";
import Works from "./views/Works.vue";
import Skills from "./views/Skills.vue";
import Blog from "./views/Blog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Top
      }
    },
    {
      path: "/works",
      components: {
        default: Works
      }
    },
    {
      path: "/skills",
      components: {
        default: Skills
      }
    },
    {
      path: "/blog",
      components: {
        default: Blog
      }
    }
  ]
});
