<template>
  <div>
    <img v-if="result && result.imgUrl" 
    :src="result.imgUrl" 
    width="200" 
    height="200"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";
export default defineComponent({
  name: 'asynccomponent',
  async setup() {
    
    const resData  = await axios.get('https://apiblog.jspang.com/default/getGirl')

    
    return {result: resData.data}
  }
})
</script>

<style>

</style>