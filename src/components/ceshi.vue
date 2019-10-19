<template>
    <div>
      <el-button @click="tolist">默认按钮</el-button>
      <el-button type="primary" @click="tolist">主要按钮</el-button>
      <el-button type="success" @click="tolist">成功按钮</el-button>
      <el-button type="info" @click="tolist">信息按钮</el-button>
      <el-button type="warning" @click="tolist">警告按钮</el-button>
      <el-button type="danger" @click="tolist">危险按钮</el-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      tolist(){
        this.$router.push({'path': 'list'})
      }
    }
  }
</script>

<style>

</style>
