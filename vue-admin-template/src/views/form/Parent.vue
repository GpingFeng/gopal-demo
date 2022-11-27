<template>
  <div class="app-container">
    {{foo}}
    <Child  />
  </div>
</template>

<script>
import Child from './Child';
export default {
  inject: ['foo'],
  components: {
    Child,
  },
  data() {
    return {
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
  created() {
    console.log('$listeners:', this.$listeners);
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

