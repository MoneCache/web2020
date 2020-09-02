<template>
  <div>
    <h1>checkbox演示 vmodel</h1>
    <div>
      <template v-for="(item, idx) in value">
        <input name="checkbox"
               type="checkbox"
               :key="idx"
               :checked="item.checked"
               :value="selectVal"
               @change="handleChange"
               @input="handleInput" />{{item.label}}
      </template>
    </div>

  </div>
</template>

<script>
export default {
  name: 'checkbox',
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  props: {
    value: {
      type: Array
    },
    selectItem: {
      type: Array,
      default () {
        return []
      }
    }
    // checked: {
    //   type: Boolean
    // },
  },
  data () {
    return {
      selectVal: []
    }
  },
  methods: {
    handleChange (e) {
      this.$emit('change', this.selectItem)
    },
    handleInput (e) {
      this.$emit('input', this.selectVal)
    }
  }
}
</script>

<style>
</style>