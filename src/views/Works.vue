<template>
  <main class="main-container">
    <div class="main-area">
      <BaseLogo>
        Works
        <br />
      </BaseLogo>
      <div class="main-area__works-group grid-item--left">
        <div class="main-area__works-group__contents">
          <transition name="fade">
            <img
              :key="currentId"
              :src="current.src"
              :alt="current.alt"
              :class="[current.class,'main-area__works-group__contents__img']"
            />
          </transition>
        </div>
      </div>
      <div class="main-area__works-detail grid-item--center">
        <transition name="fade">
          <h2 :key="currentId" class="main-area__works-detail__title">{{ current.name }}</h2>
        </transition>
        <div class="main-area__works-detail__ruby">{{ current.ruby }}</div>
        <div class="main-area__works-detail__tool">{{ current.tool }}</div>
        <div class="main-area__works-detail__text">{{ current.text }}</div>
      </div>
    </div>
    <div class="bands-container">
      <div class="pagination" v-bind:value="currentId">
        <div
          v-for=" item in list"
          :key="item.id"
          :class="[active(item.id), 'tab']"
          @click="idClickHandler(item)"
        >{{ item.name }}</div>
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
  data() {
    return {
      currentId: 1,
      list: [
        {
          id: 1,
          name: "TALES Hair",
          src: require("../assets/talesJob.png"),
          alt: "ヘアーサロンの実績",
          class: "hair-salon--img",
          ruby: "テイルズ美容室HPのデザイン",
          tool: "Figma / Photoshop",
          text: `30〜50代の女性をターゲットにしたHPデザインです。
          薬剤やトリートメントの知識が豊富な美容室です。
          「お客さまに合わせた施術」が得意であることを伝えられるようなデザインにしました。`
        },
        {
          id: "2",
          name: "PreviousJob",
          src: require("../assets/PreviosJob.png"),
          alt: "前職の実績",
          class: "previousjob--img",
          ruby: "前職（フロントエンドエンジニア）",
          tool: "HTML / CSS / JavaScript（Vue.js）/ Figma",
          text: `YouTubeを観る中高生をターゲットに、Webサイトを作っていました。
          ターゲット層に近い若年層ならではの意見を持ち、社内ABテストの後にTopページデザインを採用してもらうなど積極的に提案しながら進めていました。
          また、WordPrssで運営していたものをVue.jsへ移行する際には、コンポーネント化を進め再利用しやすいコーディング設計を心がけていました。
          `
        }
      ]
    };
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {};
    },
    active() {
      return function(id) {
        return this.currentId === id ? "active" : false;
      };
    }
  },
  methods: {
    idClickHandler(item) {
      return (this.currentId = item.id);
    }
  }
};
</script>

<style scoped lang='scss'>
.main-area__works-group__contents {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
}
.main-area__works-group__contents__img {
  width: 90%;
  transition: all 0.5s ease-out;
  box-shadow: -4px 4px 15px #888;
}

.main-area__works-detail {
  align-self: start;
}
.main-area__works-detail__title {
  font-size: 50px;
  transition: all 0.8s;
  margin-bottom: 10px;
}
.main-area__works-detail__ruby {
  color: rgb(165, 165, 165);
  font-weight: lighter;
  margin-bottom: 10px;
}
.main-area__works-detail__tool {
  color: #e27c7f;
  margin-bottom: 10px;
}
.main-area__works-detail__text {
  white-space: pre-line;
  line-height: 1.8;
}

.fade-leave-active {
  position: absolute;
}
.fade-enter {
  transform: scale(0.8);
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

.bands-container::before {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  width: 4px;
  height: 100%;
  background-color: #e7fff6;
}

.pagination {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.tab {
  color: rgb(165, 165, 165);
  font-size: 30px;
  line-height: 100％;
  cursor: pointer;
  transition: all 0.5s ease 0s;
}
.tab:hover {
  color: #333;
  transform: scale(1.2);
}
.active {
  transform: scale(1.2);
  color: #333;
}
</style>