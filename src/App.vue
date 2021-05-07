<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <main />
        <router-view></router-view>
        
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
//1、导入vue子组件
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue"
//2、注册vue子组件，components
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header{
  background-color: #244152;
}
</style>
