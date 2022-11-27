<template>
  <div class="app-container">
    <!-- FullName: <p>{{fullName}}</p> -->
    <el-button @click="clickMe">点击改变Obj.name</el-button>
    <p>{{obj.name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Gopal',
      lastName: 'Feng',
      fullName: '',
      obj: {
        name: '点击前的name'
      }
    }
  },
  watch: {
    // firstName(newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName;
    // },
    'obj.name': {
      handler: function(oldValue, newValue) {
        console.log(oldValue + ' ' + newValue)
        console.log('Obj 的值发生变化啦');
      },
      immediate: true,
      // deep: true,
    },
    firstName: {
      handler: function(newName, oldName) {
        this.fullName = newName + ' ' + this.lastName;
      },
      immediate: true
    }
  },
  methods: {
    clickMe() {
      // this.obj = {
      //   name: 'Gopal'
      // }
      this.obj.name = '点击后的name';
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

