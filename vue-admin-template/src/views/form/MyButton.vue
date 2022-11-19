<template>
  <div class="app-container">
    <el-button>按钮</el-button>
    {{result}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ''
    }
  },
  methods: {
    clickBtn() {
      this.result = '子组件点中啦';
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

