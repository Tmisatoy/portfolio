<template>
  <main class="main-container">
    <div class="main-area">
      <base-logo>
        Misato Todaka's
        <br />Portfolio
      </base-logo>
      <canvas id="canvas" ref="canvas" width="350px" height="200px">ブラウザが対応しておりません</canvas>
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
      ctx: null
    };
  },
  methods: {
    rectangle() {
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, 350, 200);
    }
  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    // console.log(this.$el)

    this.ctx = this.$refs.canvas.getContext("2d");
    this.rectangle(this.ctx);
  }
};
</script>

<style scoped lang="scss">
#canvas {
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