<template>
  <el-main id="indexMain">
        <el-card class="box-card" id="loginCard">
          <div slot="header" class="clearfix">
            <span>系统登录</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >找回密码</el-button
            >
          </div>
          <div id="loginContent">
            <el-input clearable v-model="user.username"></el-input>
            <el-input
              clearable
              v-model="user.password"
              show-password
            ></el-input>
            <el-button id="loginSystem" @click.native="loginSystem">登录</el-button>
          </div>
        </el-card>
      </el-main>

      
  
</template>

<script>
import Axios from "axios";
export default {
  name:"indexMain",
  data(){
    return{
      user: {
        username: " ",
        password: " ",
      },
     
    }
  },
   methods:{
        loginSystem:function(){
        Axios.get('http://localhost:3030/login',{params:this.user}).then(function(response){
            alert(response.data.username);
            alert(response.data.password);
        });
        
         
        },


    },

};
</script>

<style>
  #loginCard{
    
            width: 300px;
            height: 300px;
            margin: 0 auto;
            margin-top: 200px;
            /* border:black 2px solid; */
            border-radius:1\rem;
            /* background-color: blueviolet; */
            box-shadow: black 1px 1px 1px 1px;
        }
  #loginCard span{
    display: inline-block;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
  }
  #loginCard >.el-button{
    color: cyan;
    display: inline-block;
    text-align: center;
    width: 50%;
    /* height: 50%; */
    margin-top: 5px;
    margin-left:100px;
    
  }
#text{
  
  line-height: 20px;
  /* display:inline-block; */
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 10px;
  /* background-color:cornsilk; */
} 
#text>.el-input{
  width: 200px;
  height: 25px;
  margin-bottom: 20px;
  /* padding-top:0px; */

  margin-right:50px;
}
#input3>.el-button{
  /* background-color: rgb(90, 11, 11); */
  /* display:inline-block; */
  margin-left: 15%;
  margin-top: 0px;
  margin-bottom:25px;
  height: 30px;
  width: 100px;
  font-size: 10px;
  padding-top:0px;
   display: inline-block;
 
}   
#loginContent >.el-button{
  margin-left: 100px;
  margin-top: 3px;
  padding-left: 3px;
  padding-top: 1px;
}  
</style>