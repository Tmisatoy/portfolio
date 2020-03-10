<template>
  <main class="main-container">
    <div class="main-area--all">
      <BaseLogo class="grid-item--top">
        About
        <br />
      </BaseLogo>
      <div class="main-area__about-content grid-item--top">
        <div class="main-area__about-content__heading">戸高 美里</div>
        <span>とだか みさと</span>
        <dl>
          <dt>最終学歴</dt>
          <dd>N高等学校</dd>
          <dt>出身地</dt>
          <dd>宮崎県</dd>
          <dt>趣味</dt>
          <dd>服作り、美術館巡り、Youtubeを観ること</dd>
        </dl>
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
      item: [{ title: "最終学歴", txt: "N高等学校" }, {}]
    };
  }
};
</script>

<style scoped lang="scss">
.main-area__about-content__heading {
  font-size: 40px;
}

.main-area__about-content span {
  font-size: 14px;
  color: #888;
  letter-spacing: 12px;
}

.main-area__about-content dl {
  width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto;
  grid-template-columns: 15% 85%;
}

.main-area__about-content dt {
  color: #888;

  line-height: 30px;
  width: 100%;
  border: 1px solid #888;
  text-align: center;
}

.main-area__about-content dd {
  line-height: 30px;
  margin-left: 10px;
}
</style>