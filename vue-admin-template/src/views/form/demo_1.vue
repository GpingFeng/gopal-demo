<template>
  <div class="app-container">
    <!-- {{result}} -->
    <Parent />
    <!-- <el-Button>获取父组件foo值</el-Button> -->
    <!-- props -->
  </div>
</template>

<script>
// import MyButton from './MyButton';
import Parent from './Parent';
export default {
  provide: {
    foo: '我是父组件初始化 Foo 值',
  },
  components: {
    // MyButton,
    Parent
  },
  data() {
    return {
      // num: 1,
      result: '',
    }
  },
  methods: {
    onClose() {
      this.result = '点击了子组件';
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

