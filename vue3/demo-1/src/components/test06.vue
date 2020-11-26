<template>
  <div>这个是一个弹框</div>
  <div class="box">弹框</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "test06",
  setup() {

  }
})
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
  background-color: #000;
  color: white;
}
</style>