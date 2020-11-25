<template>
  <div>
    <h1>以下是图片</h1>
    <h2>每3秒钟执行一次</h2>
    <div v-if="prloaded.value">
      <img :src="prresult.value.message" alt="" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import fetch from "../hooks/useAxios";
export default defineComponent({
  name: "test05",
  setup() {
    const prloading = ref(null);
    const prloaded = ref(null);
    const prresult = ref(null);

    const func = () => {
      const { loading, loaded, result } = fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      prloading.value = loading;
      prloaded.value = loaded;
      prresult.value = result;
      return func;
    };
    setInterval(func(), 5000);
    return {
      prloading,
      prloaded,
      prresult,
    };
  },
});
</script>

<style></style>
