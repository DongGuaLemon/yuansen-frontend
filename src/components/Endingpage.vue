<template>
<div class="card">
  <img src="https://yuan-sen.com.tw/uploads/images/%E5%AE%98%E6%96%B9%E9%A6%96%E9%A0%81(1).jpg" alt="Avatar" class="imgnice">
  <div class="container">
    <h4><b>恭喜您答對了{{this.$route.params.nice}}題</b></h4> 
    <h3>您獲得了 商品折抵卷100元</h3>
    <h4>序號:55ADAS25423</h4> 
  </div>
  <router-link :to="{path:'/'}"><b-button class="btn1" style="width:100%;">返回首頁</b-button></router-link>
  <a href="https://www.yuan-sen.tw/"><b-button style="width:100%;">前往原生植物園</b-button></a>
</div>  
</template>
<script>
export default {
  data(){
    return{
      nice:0
    }
  }
}
</script>
<style scoped>
.card {
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
}
.btn{
  margin-bottom:10px; 
}
.imgnice{
  width:100%;
  height:550px;
}
@media screen and (min-width: 350px) and (max-width: 450px){
 .imgnice{
   height: 350px;
 } 
 .card{
   width: 300px;
   height: 50%;
 }
}
</style>
