<template>

  <div>
    <div>
      <!--注意: 这里是表单组件, 一般不用 .sync修饰符, 这里只是做个范例 -->
      <input type="text"
             :value="foo"
             @input="handleUpdate">
    </div>
    <div>
      <p>当前input框的值为{{foo}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sync",
  props: {
    foo: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleUpdate (e) {
      this.$emit('update:foo', e.target.value)
    }
  }

}
</script>

<style>
</style>