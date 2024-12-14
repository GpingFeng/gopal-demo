<template>
  <div class="app-container">
    <el-row>
      <input v-model="value" />
    </el-row>
    <el-row>
      <input :bind="value" @input="value= $event.target.value" />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },

  methods: {
  },

}
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

