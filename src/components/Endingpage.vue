<template>
<div class="card">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%;height:550px">
  <div class="container">
    <h4><b>恭喜您答對了{{this.$route.params.nice}}題</b></h4> 
    <p>您獲得了..............................</p> 
  </div>
  <b-button class="btn1">再玩一次</b-button>
  <b-button>前往原生植物園</b-button>
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
<style>
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
</style>
