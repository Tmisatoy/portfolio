<template>
  <header class="header">
    <nav class="menu">
      <div class="pc-only">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <router-link
              :to="item.path"
              active-class="link--active"
              exact
              class="link"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="sp-only">
        <input type="checkbox" id="menu-toggle" />
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
          <li v-for="(item, index) in items" :key="index">
            <router-link
              :to="item.path"
              active-class="link--active"
              exact
              class="link"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
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
        { title: "Blog", path: "/blog" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@include mq(pc) {
  .sp-only {
    display: none;
  }
  .menu {
    position: fixed;
    top: 50px;
    right: 45px;
    font-size: 18px;
    ul {
      display: flex;
    }
  }
  .link {
    color: $color-logo;
  }
  .link--active {
    color: $color-logo;
  }
}

/*---------------------------------

  SP

---------------------------------*/
@include mq(sp) {
  .pc-only {
    display: none;
  }

  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    display: none;
  }
  #trigger,
  #burger,
  #burger:before,
  #burger:after {
    position: absolute;
    top: 15px;
    left: 15px;
    background: $color-text-thin;
    width: 24px;
    height: 3px;
    transition: 0.2s ease;
    cursor: pointer;
    z-index: #{map-get($z-index, modalLay) + 1};
  }
  #trigger {
    height: 15px;
    background: none;
  }
  #burger:before {
    content: " ";
    top: 7px;
    left: 0;
  }
  #burger:after {
    content: " ";
    top: 14px;
    left: 0;
  }
  #menu-toggle:checked + #trigger + #burger {
    top: 35px;
    transform: rotate(180deg);
    transition: transform 0.2s ease;
  }
  #menu-toggle:checked + #trigger + #burger:before {
    width: 20px;
    top: -3px;
    left: 14px;
    transform: rotate(45deg) translateX(-5px);
    transition: transform 0.2s ease;
  }
  #menu-toggle:checked + #trigger + #burger:after {
    width: 20px;
    top: 2px;
    left: 14px;
    transform: rotate(-45deg) translateX(-5px);
    transition: transform 0.2s ease;
  }
  .link {
    color: $color-logo;
  }
  .link--active {
    color: $color-logo;
  }
  li,
  a {
    margin: 75px 0 -55px 0;
    display: none;
  }
  li {
    padding: 0 0;
    text-indent: 56px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.8;
  }
  #menu {
    position: absolute;
    z-index: map-get($z-index, modalLay);
    margin: 0;
    padding: 0;
    width: 64px;
    height: 64px;
    background-color: $color-bg;
    border-bottom-right-radius: 100%;
    box-shadow: 0 2px 5px $color-shadow;
    animation: not-checked-anim 0.2s both;
    transition: 0.2s;
  }
  #menu-toggle:checked + #trigger + #burger + #menu {
    animation: checked-anim 0.4s ease both;
  }
  @keyframes checked-anim {
    100% {
      width: 60%;
      height: 100%;
      border-radius: 0;
    }
  }
  @keyframes not-checked-anim {
    0% {
      width: 60%;
      height: 100%;
    }
  }
  #menu-toggle:checked + #trigger ~ #menu > li,
  a {
    display: block;
  }
}
</style>