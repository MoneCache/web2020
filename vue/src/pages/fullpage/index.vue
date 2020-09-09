<template>
  <div>
    <div class="back"
         :style="{'height': height + 'px'}"></div>
    <div class="back"
         :style="{'height': height + 'px'}">
      <blog-card></blog-card>
    </div>
  </div>
</template>

<script>
import blogCard from '@/components/card/index'
export default {
  name: 'fullpage',
  components: {
    blogCard
  },
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    this.height = document.body.clientHeight
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