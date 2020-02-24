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
      <i class="fas fa-caret-down fa-10x"></i>
      <div class="sns-area">
        <h2>Contact</h2>
        <ul>
          <li>
            <p>Twitter</p>
            <a href="https://twitter.com/luck_1117_" target="blank">@luck_1117_</a>
          </li>
          <li>
            <p>Facebook</p>
            <a href="https://www.facebook.com/profile.php?id=100017107334138" target="blank">戸高美里</a>
          </li>
          <li>
            <p>Github</p>
            <a href="https://github.com/Tmisatoy" target="blank">Tmisatoy</a>
          </li>
          <li>
            <p>Qiita</p>
            <a href="https://qiita.com/Tmisatoy" target="blank">Tmisatoy</a>
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
  box-shadow: -4px 4px 10px #73a793;
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

.color {
  border-color: red;
}

.fas {
  color: #e7fff6;
  position: fixed;
  bottom: calc(100vh * 0.16);
  margin-left: 25px;
}

.sns-area {
  color: #888;
  height: 100%;
  display: flex;
  align-items: center;
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
  a {
    color: #888;
  }
}
</style>