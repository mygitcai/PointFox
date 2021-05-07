<template>
      <div id="footerContent">
          <div id="tip1">
            <p>{{value1}}</p>
          </div>
          <div id="tip2">
            <p>{{value2}}</p>
          </div>
        </div>
</template>

<script>
export default {
  name:"footerContent",
  data(){
    return{
      value1:" 通信地址：江西省南昌市湾里区江西软件大学 邮编：330041",
      value2:"&copy; 版权属于江西软件大学 2020-2021"
    }
  }

}
</script>

<style>
 #indexFooter{
            margin-top: 50px;
        }
        #footerContent{
            text-align: center;
        }
</style>