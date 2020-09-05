<template>
  <div>
    <div class="back"
         :style="{'height': height + 'px'}"></div>
    <div class="back"
         :style="{'height': height + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'fullpage',
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.height = document.body.clientHeight
    // })
    console.log(document.body.offsetHeight)
  }
}
</script>

<style>
.back {
  width: 100%;
  background-image: url("../../assets/home3.png");
  background-size: cover;
}
</style>