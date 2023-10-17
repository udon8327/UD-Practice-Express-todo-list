<template>
  <span class="ud-countdown" ref="count">{{formatCountTime}}</span>
</template>

<script>
export default {
  name: 'UdCountdown',
  props: {
    time: { default: 60 }, // 倒數秒數
    delay: Boolean, // 延遲開始倒數
    type: { default: "second" } // 時間格式
  },
  data() {
    return {
      countInterval: {},
      countTime: this.time
    }
  },
  computed: {
    formatCountTime() {
      if(this.type === "second") {
        return this.countTime
      }else if(this.type === "minute"){
        let min = Math.floor(this.countTime / 60);
        let sec = this.countTime - (min * 60);
        return `${min}:${padStart(sec)}`;
      }
    }
  },
  mounted() {
    if(!this.delay) this.countdown();
  },
  methods: {
    countdown(){
      this.countInterval = setInterval(() => {
        this.countTime -= 1;
        if(this.countTime <= 0){
          this.$emit("timeup");
          clearInterval(this.countInterval);
        }
      }, 1000);
    },
    reset(){
      clearInterval(this.countInterval);
      this.countTime = this.time;
      this.countdown();
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
