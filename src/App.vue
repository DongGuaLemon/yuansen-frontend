<template>
  <div id="app">
    <router-view></router-view>
    <div id="icon">
      <router-link :to="{path:'/'}" style="text-decoration:none;"><h1 class="iconimg">ㄑ</h1></router-link>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#icon{
  z-index: 100;
  position: absolute;
  top: 10px;
  left: 20px;
  width:80px;
  height:80px; 
  text-align: center;
}
#icon:hover{
  transform: scale(1.1);
}
.iconimg{
  color: #000;
}
@media screen and (min-width: 350px) and (max-width: 450px){
  #icon{
     top: 10px;
    left: -5px;
  }
}
</style>
