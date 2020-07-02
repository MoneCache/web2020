<template>
  <div>
    <input :type="type"
           :value="value"
           @input="_input">
  </div>
</template>

<script>
export default {
  name: 'myinput',
  props: {
    type: {
      type: String,
      default () {
        return 'text'
      }
    },
    value: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    _input (e) {
      this.$emit('input', e.target.value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style>
</style>