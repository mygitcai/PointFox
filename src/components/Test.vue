<template>
<div id="inputBook">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
     <el-form-item label="">
       <el-input v-model="formInline.user" placeholder="请输入查询数据"></el-input>
     </el-form-item>
     <el-form-item>
       <el-button type="primary" @click="onSubmit">查询</el-button>
     </el-form-item>
  </el-form>
  <div>
    
  </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style>
#inputBook .el-form{
  /* display: block; */
  /* height: 600px; */
  /* width: 400px; */
  margin-left: 300px;

}
#inputBook .el-input{
   display: block; 
   height: 600px;
   width: 400px;
}
</style>