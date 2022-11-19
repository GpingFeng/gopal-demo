<template>
  <div class="app-container">
    <div>{{num}}</div>
    <MyButton @click.native="clickMe" />
    <!-- props $emit -->
  </div>
</template>

<script>
import MyButton from './MyButton';
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      num: 1,
      result: '',
    }
  },
  methods: {
    clickMe() {
      this.num++;
    },
    clickContainer() {
      this.result = '点击的是区域2';
    },
    clickBlock() {
      this.result = '点击的是区域1';
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.container {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.block {
  width: 50px;
  height: 50px;
  background-color: gold;
}
</style>

