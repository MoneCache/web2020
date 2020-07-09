<template>
  <div>
    <h1>checkbox演示 vmodel</h1>
    <div>
      <template v-for="(item, idx) in model.options">
        <input name="checkbox"
               type="checkbox"
               :key="idx"
               :value="item.value"
               v-model="item.checked" />{{item.label}}
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    model: {
      prop: 'checked',
      event: 'change'
    }
  },
  data () {
    return {
      model: {
        options: [
          {
            label: "第一",
            value: 'first',
            checked: true
          },
          {
            label: "第二",
            value: 'second',
            checked: false
          },
          {
            label: "第三",
            value: 'three',
            checked: false
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>