<template>
  <div class="app-container">
    子组件值：{{foo}}
    <el-button @click="ChangeFoo">点击改变 Foo</el-button>
  </div>
</template>

<script>
export default {
  inject: ['foo'],
  data() {
    return {
    }
  },
  methods: {
    ChangeFoo() {
      this.foo = '我是子组件的 Foo 啦';
    },
    onClose() {
      this.$emit('close')
    },
  }
}
</script>

<style scoped>

</style>

