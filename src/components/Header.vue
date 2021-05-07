<template>
  <div id="headerBook">
     <div id="headerTitle">
        江西软件大学-新型图书管理系统
     </div>
     <div id="headerFunction">
        <router-link to="/main"><el-button type="primary" >系统登录</el-button></router-link>
        <router-link to="/student"><el-button type="primary" >学生信息查询</el-button></router-link>
        <router-link to="/test"><el-button type="primary" >工作中心</el-button></router-link>
        <router-link to="/cnnode"><el-button type="primary" >图书信息查询</el-button></router-link>
     </div>
  </div>
</template>

<script>
export default {
    name:"headerBook",
    data(){
        return {
           
        }
    }
}
</script>

<style>
#headerBook{
    /* background-color: red; */
}
#headerTitle{
    /* background-color: blue; */
    width: 400px;
    height: 60px;
    color:white;
    font-size: 20px;
    font-weight: bolder;
    line-height: 60px;
    float: left;
}
#headerFunction{
    float:right;
    /* background-color: blueviolet; */
    
}
a{
    text-decoration: none;
}
#headerFunction  .router-link-active{
    text-decoration: none;
}
#headerFunction  .el-button{
    /* float:inherit; */
    /* background-color: aqua; */
    display:inline;
    margin-left: 8px;
    margin-right: 5px;
    margin-top: 5px;
    /* background-color: lawngreen; */
    border-radius:0.1\rem;
    width: 150px;
    height: 50px; 
     /* text-decoration: none; */
    /* border-color:#0a9588; */
}

</style>