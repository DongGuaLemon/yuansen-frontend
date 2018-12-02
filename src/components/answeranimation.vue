<template>
  <div v-show="answerpage" class="answerpage">
    <div class="correct" v-if="showcorrect"></div>
    <div class="wrong" v-if="showwrong"><span class="wrongtext">X</span></div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      showcorrect:false,
      showwrong:false,
      answerpage:false
    }
  },
  methods:{
    answer(e){
      if(e===true){
        this.answerpage=true;
        this.showcorrect=true;
        setTimeout(() => {
         this.showcorrect=false;
         this.answerpage=false;
        }, 1000);
        
      }
      else{
        this.showwrong=true;
        this.answerpage=true;
        setTimeout(() => {
         this.showwrong=false;
         this.answerpage=false;
        }, 1000);
      }
    }
  }
}
</script>
<style scoped>
.answerpage{
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  position: fixed;
  opacity: 0.7;
}
.correct{
  border: 30px solid #3a3;
	height: 250px;
	width: 250px;
	border-radius: 50%;
  margin: 0 auto;
  margin-top: 80px;
  animation: up 0.3s;
  animation-fill-mode: forwards ; 
  -webkit-animation: up 0.3s;
  -webkit-animation-fill-mode: forwards ; 
}
@-webkit-keyframes up{
 0% {
    -webkit-transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(0);
  }
}
@keyframes up{
 0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
.wrong{
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 16em;
  color: red;
  font-weight: bold;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  margin-top: 50px;
  animation: up 0.3s;
  animation-fill-mode: forwards ; 
  -webkit-animation: up 0.3s;
  -webkit-animation-fill-mode: forwards ; 
}
@media screen and (min-width: 350px) and (max-width: 450px){
  .wrong{
    margin-left: 100px;
  }
}
</style>
