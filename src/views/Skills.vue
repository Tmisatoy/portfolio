<template>
  <main class="main-container">
    <div class="main-area--all">
      <BaseLogo class="grid-item--top">
        Skills
        <br />
      </BaseLogo>
      <RadarChart :chartData="chartData" :options="options" />
    </div>
  </main>
</template>

<script>
import BaseLogo from "../components/BaseLogo.vue";
import RadarChart from "../components/RadarChart.vue";
export default {
  components: {
    BaseLogo,
    RadarChart
  },
  data() {
    return {
      chartData: {
        labels: ["HTML", "CSS", "JavaScript", "Vue.js"],
        datasets: [
          {
            label: "2020年",
            data: [60, 40, 60, 60],
            backgroundColor: "RGBA(225,95,150, 0.2)",
            borderColor: "RGBA(225,90,150, 0.8)"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "技術の得意度",
          fontSize: 20
        },
        scale: {
          pointLabels: {
            fontColor: "#888",
            fontSize: 20
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 20,
            callback: function(value) {
              return value + "%";
            },
            backdropColor: "rgba(255, 255, 255, 0)"
          }
        }
      }
    };
  }
};
</script>

<style lang="scss">
.main-area--all {
  height: 100vh;
}
</style>