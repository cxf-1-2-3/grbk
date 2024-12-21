<template>
  <div class="watermark" ref="watermarkRef">
    <button @click="openSY">使用水印</button>
    <button @click="delectSY">去掉水印</button>
  </div>
</template>
<script>
import { removeWatermark, setWaterMark } from './js/watermark'

export default {
  name: 'AppMain',
  mounted() {
    // 加载水印
    // setInterval(() => {
      setWaterMark("我的水印", new Date(),this.$refs.watermarkRef);
    // }, 1000)
  },
  methods: {
    delectSY() {
      removeWatermark(this.$refs.watermarkRef);
    },
    openSY() {
      setWaterMark("我的水印", new Date(), this.$refs.watermarkRef);
    }
  },
  computed: {

  },
  beforeDestory() {
    
  },
}
</script>
<style scoped>
.watermark {
  width: 800px;
  height: 500px;
  position: relative;
}
</style>
