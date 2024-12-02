<template>
  <div>
    <ClientOnly>
      <slot name="before" />
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  name: 'CountUp',
  props:['endVal'],
  data() {
    return {
      counter:null
    }
  },
  mounted() { 
    this.init()
  },
  methods: {
    init() {
      import('countup.js').then(module => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endVal, {
            duration: 3, //持续时间
          }) 
          setTimeout(() => {
            this.counter.start()
          },1000)
        })
      })
    },
    beforeDestroy() {
      this.counter && this.counter.reset()
      this.counter = null
    }
  }
}
</script>