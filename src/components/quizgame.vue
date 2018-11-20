<template>
  <div class="quizgame">
    <answeranimation ref="reference"></answeranimation>
    <b-container>
        <b-row class="justify-content-md-center mb-5">
          <b-col cols="2" md="1" lg="0"></b-col>
          <b-col class="pro" cols="8"  md="6" lg="8"> <b-progress :max="max" show-value animated><b-progress-bar class="progress w-40 mb-5" :label="'第'+counter+'題'" :value="counter"></b-progress-bar></b-progress></b-col>
          <b-col offset="3" offset-md="1" offset-lg="0" class="timer"><div class="circle"><span class="timer1">{{timer}}</span></div></b-col>
        </b-row>
      <b-container>
        <b-row class="mb-1">
          <b-col class="cardcol">
          <b-card>
            <b-media no-body>
              <b-media-aside vertical-align="center">
                <b-img class="size" :src="topic.imgsrc"/>
              </b-media-aside>
              <b-media-body class="ml-4">
                <p>
                  {{topic.main}}
                </p>
              </b-media-body>
            </b-media>
          </b-card>
          </b-col>
        </b-row>
      </b-container>       
        <div class="buttongroup">
          <b-row class="justify-content-md-center" align-h="around">
            <b-col 
                    v-for="(item,index) in button" 
                    :key="item.id"
                    :class="button_(index)"
                    > 
              <button
                    @click="sub(index,item.id,item.isactive)" 
                    :disabled="item.correct" 
                    :uid="item.id"
                    class="btn" 
                    
                    >{{item.ans}}
              </button>
            </b-col>
             <!-- <b-col> <button class="btn button2" :class="{correct1:isactive1,error:iserror1}">選項2222222</button></b-col>
             <b-col> <button class="btn button3" :class="{correct2:isactive2,error:iserror2}">選項3333333</button></b-col>
             <b-col> <button class="btn button4" :class="{correct3:isactive3,error:iserror3}">選項4444444</button></b-col> -->
          </b-row>
        </div>
    </b-container>
  </div>
</template>
<script>
/*let removeadd = function(e){
  this.classList.remove('playing')
}*/
import answeranimation from './answeranimation.vue'
export default {
  data() {
    return {
      counter: 7,
      max:10,
      timer:10,
      topic:{
        main:"Cras . Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felisin faucibus.",
        imgsrc:"",
      },
      button:[
        {ans:"answer1",isactive:true,id:"1"},
        {ans:"answer2",isactive:false,id:"2"},
        {ans:"answer3",isactive:false,id:"3"},
        {ans:"answer4",isactive:false,id:"4"}
      ],
      test:false,
      // isactive:false,
      // iserror:true,
    }
  },
  methods:{
    // times(){
    //   let interval = window.setInterval(()=>{
    //     if(this.timer--<=0){
    //       this.timer=10;
    //       window.clearInterval(interval);
    //     }
    //   },1000);
    // }

    //timer
    times(){
      var vm = this;
      let timer = window.setInterval(function(){
        if(vm.timer--<=0){
           vm.timer=10;
           //times();
           vm.times();
           window.clearInterval(timer);
        }
      },1000)
    },
    sub(index,uid,isactive){
      console.log(index)
      const key = document.querySelector(`.btn[uid="${uid}"]`)//獲得button的class和uid的屬性
      console.log(key)
      console.log(isactive)
      this.$refs.reference.answer(isactive);
      key.classList.add('playing')//添加class屬性playing配合css
      key.addEventListener('transitionend',function(e){ //監聽transitionend(判斷css transition事件結束)，移除playing屬性，要呼叫vue的this要使用arrow function。
         this.classList.remove('playing')
       })
      /*function removeadd(e){
        this.classList.remove('playing')
      }*/
    },
    button_(index){
      return "button_"+index;
    }
  },
  mounted(){
    this.times();
  },
  components:{
    answeranimation
  }
};
</script>
<style scoped>
.quizgame {
  /* padding-top: 5%; */
  width: 100%;
  height: 100%;
  position: absolute;
}
 .pro {
  margin-top: 5%;
}  
.progress{
  height: 40px;
  font-size: 30px;
} 
.buttongroup{
  margin-top: 10%;
}
.timer{
  margin-top: 25px;

}
/*.size{
   width: 400px;
  height: 300px; 
}*/
.timer1{
  font-size: 30px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
}
.circle{
  text-align: center;
  width: 150px;
	height: 150px;
	line-height: 150px;
	border: 1px dashed red;
	border-radius: 150px;
  margin-left: 15%;
}
.buttongroup button{
  margin-left:15%;
  margin-right:15%;
  height: 100%;
  font-size: 25px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3498db;
  cursor: pointer;
  background: none;
  position: relative;
  overflow: hidden;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
   /*-moz-transition:0s 1s;
   transition:0s 1s;*/ 
} 
p{
  font-size: 25px;
}
/* .correct:active {
  color: red;
  background: #3498db;
   -moz-transition:0s;
   transition:0s;
}
.error:active{
  color: white;
  background: red;
   -moz-transition:0s;
   transition:0s;
} */
.playing{
  border: 3px solid #FFC600;
  transform: scale(1.5);
  -webkit-transform: scale(1.5);
   
}
@media screen and (min-width: 350px) and (max-width: 450px){
  .buttongroup button{
  display: block;
   /*-moz-transition:0s 1s;
   transition:0s 1s;*/ 
   margin: 0 auto;
} 
.button_0,.button_1,.button_2,.button_3{
   margin-bottom: 20px;
}
p{
  font-size: 20px;
}
.timer{
  margin-top: 20px;
}
.cardcol{
  margin-top: -30px;
}
}
@media screen and (min-width: 750px) and (max-width: 851px){
  .buttongroup button{
  display:block;
   /*-moz-transition:0s 1s;
   transition:0s 1s;*/ 
   margin: 0px auto;
   font-size: 40px;
}
.button_0,.button_1,.button_2,.button_3{
   margin: 5%;
   margin-bottom: 20px;
}
.progress{
  height: 40px;
  font-size: 30px;
} 
}
@media screen and (min-width: 950px) and (max-width: 1200px){
   .buttongroup button{
   font-size: 30px;
}
  .quizgame {
  height: 100%;
  width: 100%;
  margin-top: 25%;
}
}
</style>
