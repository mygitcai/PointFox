<template>
  <div>
      <li v-for="(value,index2) in this.topicsArr" :key="index2">
          <span>
              <img id="avatar" :src="value.author.avatar_url" alt="">
          </span>
          <span> 
               {{value.title}}
          </span>
      </li>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            // user:{
            //     username:"",
            //     userpassword:""
            // },
            topicsArr:[],           

        }
    },
    // methods:{
    //     loginSystem(){
    //     Axios.get('http://localhost:3030/login',{

    //     }).then(function(response){
    //         alert(response.data)
    //     })
        
         
    //     }


    // },
    beforeCreated(){

    },
    created(){
        let that = this;
       /* json格式化 cnode*/
       Axios.get('https://cnodejs.org/api/v1/topics').then(function(response){
         if(response.data.success){
             that.topicsArr=response.data.data
         }
           })
       }
    }



</script>

<style>

#avatar{
    width: 20px;
    height: 20px;
}
</style>
