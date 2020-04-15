<template>
  <main class="main-container">
    <div class="main-area">
      <BaseLogo>
        Misato Todaka's
        <br />Portfolio
      </BaseLogo>
      <div class="main-area__shape-group">
        <transition name="fade" appear>
          <div class="white-rectangle"></div>
        </transition>
        <transition name="fade" appear>
          <canvas id="blue-canvas" ref="blueCanvas" width="350px" height="200px"></canvas>
        </transition>
        <transition name="fade" appear>
          <canvas id="purple-canvas" ref="purpleCanvas" width="350px" height="200px"></canvas>
        </transition>
      </div>
    </div>
    <div class="bands-container">
      <div class="sns-area">
        <div class="sp sp-horizontal"></div>
        <div class="sp sp-vertical"></div>
        <h2>Contact</h2>
        <ul>
          <li v-for="(item,index) in items" :key="index">
            <p>{{ item.name }}</p>
            <a :href="item.href" target="blank">{{ item.user }}</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import BaseLogo from "../components/BaseLogo.vue";

export default {
  components: {
    BaseLogo
  },
  data: function() {
    return {
      items: [
        {
          name: "Twitter",
          href: "https://twitter.com/luck_1117_",
          user: "@luck_1117_"
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=100017107334138",
          user: "戸高美里"
        },
        {
          name: "Github",
          href: "https://github.com/Tmisatoy",
          user: "Tmisatoy"
        },
        { name: "Qiita", href: "https://qiita.com/Tmisatoy", user: "Tmisatoy" }
      ],
      blueCtx: null,
      purpleCtx: null
    };
  },
  watch: {},
  methods: {
    drawTriangle() {
      this.blueCtx.beginPath();
      this.blueCtx.moveTo(250, 0); //最初の点の場所
      this.blueCtx.lineTo(350, 0); //2番目の点の場所
      this.blueCtx.lineTo(350, 100); //3番目の点の場所
      this.blueCtx.closePath(); //三角形の最後の線 closeさせる
      this.blueCtx.strokeStyle = "#0056D7"; //枠線の色
      this.blueCtx.stroke();
      this.blueCtx.fillStyle = "#0056D7";
      this.blueCtx.fill();
    },
    drawTriangle2() {
      this.purpleCtx.beginPath();
      this.purpleCtx.moveTo(0, 100); //最初の点の場所
      this.purpleCtx.lineTo(0, 200); //2番目の点の場所
      this.purpleCtx.lineTo(100, 200); //3番目の点の場所
      this.purpleCtx.closePath(); //三角形の最後の線 closeさせる
      this.purpleCtx.strokeStyle = "#ab009a"; //枠線の色
      this.purpleCtx.stroke();
      this.purpleCtx.fillStyle = "#ab009a";
      this.purpleCtx.fill();
    }
  },
  mounted() {
    this.blueCtx = this.$refs.blueCanvas.getContext("2d");
    this.drawTriangle(this.blueCtx);
    this.purpleCtx = this.$refs.purpleCanvas.getContext("2d");
    this.drawTriangle2(this.purpleCtx);
  }
};
</script>

<style scoped lang="scss">
.main-area__shape-group {
  width: 350px;
  height: 200px;
  position: relative;
}

.white-rectangle {
  z-index: 1;
  width: 350px;
  height: 200px;
  background-color: #fff;
  box-shadow: -4px 4px 10px $color-shadow;
  position: absolute;
  border-radius: 50px 0 50px 0;
  transition-delay: 1s;
  animation: my-radius 1s;
}

#blue-canvas {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  transition-delay: 1s;
  animation: slideInRight 2s;
}

#purple-canvas {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  transition-delay: 1s;
  animation: slideInLeft 2s;
}

@keyframes my-radius {
  from {
    border-radius: 0px;
  }
  to {
    border-radius: 50px;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}

.fas {
  color: $color-bg;
  position: fixed;
  bottom: calc(100vh * 0.16);
  margin-left: 25px;
}

.sns-area {
  position: relative;
  color: $color-text-thin;
  height: 100%;
  display: flex;
  align-items: center;
  &::before {
    font-family: "Font Awesome 5 free";
    content: "\f0d7";
    position: absolute;
    top: -45px;
    left: 2vw;
    line-height: 1;
    font-weight: 900;
    color: $color-bg;
    font-size: 100px;
  }
  .sp {
    display: none;
  }
  h2 {
    padding: auto 0;
    font-size: 40px;
    font-weight: normal;
  }
  ul,
  li {
    margin-left: 5vw;
    font-weight: normal;
  }
}

@include mq(sp) {
  .main-container {
    height: 100vh;
    margin: 0 8%;
  }
  .main-area {
    height: 50vh;
    padding: 1.5vh 0 1vh;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
  }
  .bands-container {
    height: 250px;
    width: 84%;
    margin-bottom: 40px;
  }
  .sns-area {
    position: relative;
    flex-wrap: wrap;
    padding-bottom: 40px;
    &::before {
      left: 38%;
    }
    .sp {
      display: block;
    }
    .sp-horizontal {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: $color-bg;
      top: calc(50% + 40px);
    }
    .sp-vertical {
      position: absolute;
      width: 2px;
      height: 50%;
      background-color: $color-bg;
      bottom: 20px;
      left: 50%;
    }
    h2 {
      font-size: 26px;
      margin: 40px auto 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0;
      li {
        width: 45%;
        margin: 15px 0 0;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>