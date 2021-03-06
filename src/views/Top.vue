<template>
  <main class="main-container">
    <div class="main-area">
      <BaseLogo>
        Misato Todaka's
        <br />Portfolio
      </BaseLogo>
      <div class="main-area__canvas-group">
        <transition-group class="canvas-group" tag="div" name="fade" appear>
          <canvas
            id="white-canvas"
            ref="whiteCanvas"
            width="350px"
            height="200px"
            key="white"
          ></canvas>
          <canvas
            id="blue-canvas"
            ref="blueCanvas"
            width="350px"
            height="200px"
            key="blue"
          ></canvas>
          <canvas
            id="purple-canvas"
            ref="purpleCanvas"
            width="350px"
            height="200px"
            key="purple"
          ></canvas>
        </transition-group>
      </div>
    </div>
    <div class="bands-container">
      <div class="sns-area">
        <div class="sp sp-horizontal"></div>
        <div class="sp sp-vertical"></div>
        <h2>Contact</h2>
        <ul>
          <li v-for="(item, index) in items" :key="index">
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
    BaseLogo,
  },
  data: function () {
    return {
      items: [
        {
          name: "Github",
          href: "https://github.com/Tmisatoy",
          user: "Tmisatoy",
        },
        { name: "Qiita", href: "https://qiita.com/Tmisatoy", user: "Tmisatoy" },
        {
          name: "Twitter",
          href: "",
          user: "don't have",
        },
        {
          name: "Facebook",
          href: "",
          user: "don't have",
        },
      ],
      whiteCtx: null,
      blueCtx: null,
      purpleCtx: null,
    };
  },
  watch: {},
  methods: {
    drawRectangle() {
      this.whiteCtx.beginPath();
      this.whiteCtx.rect(0, 0, 350, 200);
      this.whiteCtx.fillStyle = "#fff";
      this.whiteCtx.fill();
    },
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
    },
  },
  mounted() {
    this.whiteCtx = this.$refs.whiteCanvas.getContext("2d");
    this.drawRectangle(this.whiteCtx);
    this.blueCtx = this.$refs.blueCanvas.getContext("2d");
    this.drawTriangle(this.blueCtx);
    this.purpleCtx = this.$refs.purpleCanvas.getContext("2d");
    this.drawTriangle2(this.purpleCtx);
  },
};
</script>

<style scoped lang="scss">
/*---------------------------------

  main-area

---------------------------------*/
.main-area__canvas-group {
  width: 350px;
  height: 200px;
  position: relative;
  animation: canvas-wrap 4s cubic-bezier(0, 0.7, 1, 0.83);
}
@keyframes canvas-wrap {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}

.canvas-group {
  position: absolute;
  z-index: map-get($z-index, underLay);
}

#white-canvas {
  position: absolute;
  border-radius: 30px 0;
  animation: rectangle-shadow 1s 2.4s ease-in-out forwards;
}
@keyframes rectangle-shadow {
  from {
    box-shadow: 0 2px 5px transparent;
  }
  to {
    box-shadow: 0 2px 5px $color-shadow;
  }
}

#blue-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

#purple-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.4s cubic-bezier(0, 1, 0.8, 0.2);
}

/*---------------------------------

  sns-area

---------------------------------*/
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
  ul {
    display: flex;
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
    height: 56vh;
    padding: 10vh 0 1vh;
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