<template>
  <div class="app-container">
    <div>
      <el-button @click="a = true">给 a 赋值 true</el-button>
      <el-button @click="b = true">给 b 赋值 true</el-button>
      <el-button @click="a = true; b = true;">给 a 和 b 赋值 true</el-button>
    </div>
    <div :style="{ marginTop: '10px' }">
      <el-button @click="cancel">取消 a 监听</el-button>
    </div>
    <div :style="{ marginTop: '10px' }">
      <el-button @click="a = false">给 a 赋值 false</el-button>
      <el-button @click="b = false">给 b 赋值 false</el-button>
      <el-button @click="a = false; b = false;">给 a 和 b 赋值 false</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: false,
      b: false,
      unwatch: '',
    }
  },
  // watch: {
  //   a: {
  //     handler: function(newValue, oldValue) {
  //       if (newValue && this.b) {
  //         console.log('两个值都为 true：', '发送请求')
  //       }
  //     }
  //   },
  //   b: {
  //     handler: function(newValue, oldValue) {
  //       if (newValue && this.a) {
  //         console.log('两个值都为 true：', '发送请求')
  //       }
  //     }
  //   }
  // },
  methods: {
    cancel() {
      this.unwatch();
    }
  },
  created() {
    // this.unwatch = this.$watch(
    //   'a',
    //   function(newValue, oldValue) {
    //     console.log(`新值：${newValue}, 旧值：${oldValue}`);
    //   },
    //   {
    //   immediate: true,
    //   deep: true,
    // })
    const unwatch = this.$watch(
      function() {
        return this.a && this.b;
      },
      function(newVal, oldVal) {
        if (newVal) {
          console.log('两个值都为 true：', '发送请求')
        }
        // unwatch();
      }
    );
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

