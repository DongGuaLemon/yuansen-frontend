<template>

  <div class="load">
    <transition appear
     appear-active-class="fade-enter-active"
     @before-appear="beforeAppear"
     @appear="appear"
     @after-appear="afterAppear">
    >
      <span class="text1">Welcome</span>
    </transition>
      <span class="text2">my web</span>
    <transition appear
     name="fade2">
    >
   <div class="buttongroup">
      <button class="btn button1">原生植物園首頁</button>
      <button @click="game" class="btn button2">進入遊戲</button>
      <button @click="social" class="btn button3">社會企業責任</button>
    </div>
    </transition>
  </div>  
</template>
<script>
export default {

methods:{
  social(){
    this.$router.push({path:'/HelloWorld'})
  },
  game(){
    this.$router.push({path:'/loading'})
  },
  beforeAppear(){
    console.log('beforeAppear')
  },
  appear(){
    console.log('appear')
  },
  afterAppear(){
    console.log('afterAppear')
    // let vm = this;
    // setTimeout(function(){ 
    //   vm.$router.push({ path: '/HelloWorld'})
    // console.log('123')
    // }, 2000);
    
  }
}
}
</script>

<style scoped>
.load{
  width: 100%;
  height: 100%;
  background: #A8D8B9;
  text-align: center;
  font-family: sans-serif;
  padding-top:15%; 
  position: fixed;
}
.load span{
  text-transform: uppercase;
  display: block;
  
}
.text1{
  color: rgba(255, 255, 255, 0.856);
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 80px;
  margin-bottom: 10px;
  background: #A8D8B9;
  position: relative;
  margin-left:7%; 
}
.text2{
   margin-left:1%;
  font-size: 30px;
  color:white;
}

.fade-enter-active {
  animation: go 2s;
}
@keyframes go {
  0%{
    color: black;
    margin-bottom:-40px; 
  }
  30%{
    letter-spacing: 50px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 35px;
    margin-bottom: -40px;
  }
}
.buttongroup button{
  height: 100%;
  display: inline-block;
  margin: 5%;
  font-size: 25px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3498db;
  cursor: pointer;
  background: none;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  padding: 10px;
}
.button1,.button2,.button3{
  color: #3498db;
}
.button1:hover,.button2:hover,.button3:hover{
  color: #fff;
}
.btn::before{
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: #3498db;
  z-index: -1;
  transition: 0.8s;
}
 .button1::before,.button2::before,.button3::before{
  top: 0;
  border-radius: 0 0 50% 50%;
} 
.button1:hover::before,.button2:hover::before,.button3:hover::before{
  height: 180%;
}

.fade2-enter-active{
  transition: opacity 3s 2s;
}
.fade2-enter{
  opacity: 0;
  
}
</style>
