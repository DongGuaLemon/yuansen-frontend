<template>
  <div class="quizgame">
    <ul class="bg-bubbles">
      <li v-for="(item,index) in bubbles" :key="index"></li>
    </ul>
    <answeranimation ref="reference"></answeranimation>
    <b-container class="container">
        <b-row class="justify-content-md-center mb-5">
          <b-col cols="2" md="1" lg="0"></b-col>
          <b-col class="timer"><div class="circle"><span class="timer1">{{timer}}</span></div></b-col>
          <b-col class="pro" cols="12"  md="6" lg="8"> <b-progress :max="max" show-value animated><b-progress-bar class="progress w-40 mb-5" :label="'第'+counter+'題'" :value="counter"></b-progress-bar></b-progress></b-col>
        </b-row>
      <b-container>
        <b-row class="mb-1">
          <b-col class="cardcol">
          <b-card style="background-color:rgba(0,0,0,0);width:100%;">
            <b-media no-body id="media">
              <b-media-aside vertical-align="center" >
                <b-img id="img" class="size" :src="topic.state[dataindex].imgsrc"/>
              </b-media-aside>
              <b-media-body class="ml-4">
                <p>
                  {{Question.question}}
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
                    v-for="(item,index) in answerlist" 
                    :key="item.id"
                    :class="button_(index)"
                    > 
              <button
                    @click="sub(index,item.id)" 
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
import Url from '../axiosurl'
import axios from 'axios'
import image from '@/assets/logo.png'
import answeranimation from './answeranimation.vue'
import state from '../data'
 /* import { MAIN_QUERY } from '@/graphql'*/
export default {
  data() {
    return {
      bubbles:13,
      counter: 0,
      max:6,
      timer:10,
      nice:0,
      error:0,
      dataindex:1,
      isactive1:false,
        // main:"台東原生應用植物園位於哪個地區?.",
        // imgsrc:"",
        // button:[
        //   {ans:"(A)	黃金海岸",isactive:false,id:"1"},
        //   {ans:"(B) 花東縱谷",isactive:true,id:"2"},
        //   {ans:"(C) 嘉南平原",isactive:false,id:"3"},
        //   {ans:"(D) 太魯閣峽谷",isactive:false,id:"4"}
        // ]
      topic:{
        state,
      },
      Question:{},
      answerlist:[{},{},{},{}]
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
          if(vm.$route.path=='/quizgame'){
          vm.timer=vm.timer-1;
          if(vm.timer==0){ 
              if(vm.dataindex<7){
                vm.dataindex++;
                vm.question();
              }
              else{
                vm.dataindex=0;
              } 
            vm.$refs.reference.answer(false);
            vm.error++;
            vm.counter++;
            //vm.$refs.reference.answer(vm.isactive1);
            vm.timer=10;
          }
          }
          else{
            return
          }
      },1000)
    },
    sub(index,uid){
      let vm = this;
      axios({
        method: 'POST',
        url:`${Url.axiosURL()}answercheck`,
        responseType: 'json',
        headers: {
          'Content-type': 'application/json',
          //'Authorization': 'Client-ID' + id
          },
          data:{
            ans:uid,
            id:vm.dataindex
          }
        }).then(function(response){
            console.log(response.data.data);
            vm.isactive=response.data.data
            console.log(index)
            const key = document.querySelector(`.btn[uid="${uid}"]`)//獲得button的class和uid的屬性
            console.log(key)
            console.log(vm.isactive)
            vm.$refs.reference.answer(vm.isactive);//呼叫綁定refs dom的子元素的function並帶值
            key.classList.toggle('playing')//添加class屬性playing配合css
            key.addEventListener('transitionend',function(e){ //監聽transitionend(判斷css transition事件結束)，移除playing屬性，要呼叫vue的this要使用arrow function。
                setTimeout(() => {
                  this.classList.remove('playing')
                },700)
              })
        /*function removeadd(e){
          this.classList.remove('playing')
        }*/
        if(vm.isactive==true){
          vm.nice++;
          console.log(vm.nice)
          vm.dataindex++;
          vm.timer=10;
          vm.question();
        }
        else if(vm.isactive==false){
          vm.error++;
            console.log(vm.error)
            vm.dataindex++;
            vm.timer=10;
            vm.question();
        }
        if(vm.counter<10){
          vm.counter++;
        }
        }).catch(function(error){
            console.log(error)
        })
    },
    button_(index){
      return "button_"+index;
    },
     handler: function handler(event) {
      console.log(1233)
       this.$router.push({path:'/'})
       
    },
     question(){
      let vm = this;
      axios({
        method: 'POST',
        url:`${Url.axiosURL()}Getquestion`,
        responseType: 'json',
        headers: {
          'Content-type': 'application/json',
          //'Authorization': 'Client-ID' + id
          },
          data:{
            number:vm.dataindex
          }
        }).then(function(response){
            vm.Question=response.data.data[0];
            var a =0;
            for(var i in response.data.data[0]){
              if(i!=="question"&&i!=="ID"){
                vm.answerlist[a]["ans"]=response.data.data[0][i]
                vm.answerlist[a]["id"]=i
                a++;
              }
            }
            //vm.answerlist.button=response.data.data[0];
            // delete vm.answerlist.button["question"]
            // delete vm.answerlist.button["ID"]
          
            console.log(vm.Question)
            console.log(vm.answerlist)
        }).catch(function(error){
            console.log(error)
        })
    }
  },
  mounted(){
    this.times();
    this.question();
  },
  watch:{
    dataindex:function(){
      if(this.dataindex==6){
         this.$router.push({name:'endingpage',params:{nice:this.nice}})
         console.log(this.dataindex)
      }
     
    }
  },
  components:{
    answeranimation
  },
  /*apollo:{
    topic:{
      query: MAIN_QUERY
    }
  }*/
     created() {
      document.addEventListener('beforeunload', this.handler)
  },
}
</script>


<style scoped>
.quizgame {
  /* padding-top: 5%; */
  width: 100%;
  height: 100%;
  position: absolute;
}
 .pro {
  margin-top: 7%;
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
  z-index: 5;
}
.bg-bubbles{
  width: 100%;
  height: 100%;
  position: fixed; 
  /* background-color: gray; */
  /*background: linear-gradient(to top left,rgb(177, 177, 177),gray);*/
  /*background: white;*/
  background: url("../assets/black.svg");
  background-size: cover;
  background-attachment: fixed; 
  background-position: center;
   background-repeat: no-repeat;
} 
li{
  position: absolute;
  bottom:-160px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 40px 69.3px 40px;
  border-color: transparent transparent #8ED0B9 transparent;
  background-color: rgba(‎0, 123, 255, 0.15);
  list-style:none;
  animation: square 15s infinite;
  transition-timing-function: linear;
}
  li:nth-child(1) {
    left: 10%;
  }
  li:nth-child(2) {
        left: 20%;
       border-width: 0 79px 136.8px 79px;
        border-color: transparent transparent #ACDACB transparent;
        animation-delay: 2s;
        animation-duration: 7s;
  }
   li:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      li:nth-child(4) {
        left: 40%;
        border-width: 0 60px 103.9px 60px;
         border-color: transparent transparent #8ED0B9 transparent;
        animation-duration: 8s;
        background-color: rgba(‎0, 123, 255, 0.3);
      }
      li:nth-child(5) {
        left: 70%;
      }
      li:nth-child(6) {
        left: 80%;
        border-width: 0 75px 129.9px 75px;
        border-color: transparent transparent #ACDACB transparent;
        animation-delay: 3s;
        background-color: rgba(‎0, 123, 255, 0.2);
      }
      li:nth-child(7) {
        left: 38%;
        border-color: transparent transparent #61ADBE transparent;
        border-width: 0 35px 60.6px 35px;
        animation-delay: 2s;
      }
      li:nth-child(8) {
        left: 55%;
        border-width: 0 10px 17.3px 10px;
        border-color: transparent transparent #ACDACB transparent;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      li:nth-child(9) {
        left: 25%;
        border-width: 0 20px 34.6px 20px;
        animation-delay: 2s;
        animation-duration: 12s;
         border-color: transparent transparent #8ED0B9 transparent;
        background-color: rgba(‎0, 123, 255, 0.3);
      }
      li:nth-child(10) {
        left: 85%;
        border-width: 0 90px 155.9px 90px;
         border-color: transparent transparent #ACDACB transparent;
        animation-delay: 5s;
      }
      li:nth-child(11) {
        left: 65%;
       border-width: 0 90px 155.9px 90px;
        animation-delay: 6s;
        border-color: transparent transparent #61ADBE transparent;
        background-color: rgba(‎0, 123, 255, 0.1);;
      }
      li:nth-child(12) {
        left: 25%;
       border-width: 0 40px 69.3px 40px;
       border-color: transparent transparent #ACDACB transparent;
        animation-delay: 6s;
         background-color: rgba(‎0, 123, 255, 0.3);
      }
      li:nth-child(13) {
        left: 32%;
        border-width: 0 90px 155.9px 90px;
        border-color: transparent transparent #61ADBE transparent;
        animation-delay: 5s;
        animation-duration: 7s;
      }
@keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
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
	border: 2px dashed rgb(103, 253, 203);
	border-radius: 150px;
  margin-left: 15%;
  background-color: rgb(103, 253, 203);
  color: white;
}
.buttongroup button{
  margin-left:15%;
  margin-right:15%;
  height: 100%;
  width: 200px;
  text-align: center;
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
   background: white;
   /*-moz-transition:0s 1s;
   transition:0s 1s;*/ 
} 
p{
  font-size: 25px;
  color: white;
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
  transition: 0.7s;
  -webkit-transform: scale(1.5);
}
@media screen and (min-width: 350px) and (max-width: 450px){
  li{
    bottom: -350px;
  }
   #media{
    display: block;
  }
  #img{
    margin-left: auto;
    margin-right: auto;
  }
  .buttongroup button{
  display: block;
   /*-moz-transition:0s 1s;
   transition:0s 1s;*/ 
   text-align: left !important;
   margin: 0 auto;
   width: 150px;
   font-size: 17px;
} 
.button_0,.button_1,.button_2,.button_3{
   margin-bottom: 25px;
}
 .pro {
  margin-top: 6%;
}  
.circle{
  text-align: center;
  width: 100px;
	height: 100px;
	line-height: 100px;
	border: 2px dashed rgb(103, 253, 203);
	border-radius: 100px;
  margin-left: 15%;
  background-color: rgb(103, 253, 203);
  color: white;
}
p{
  font-size: 20px;
}
.timer{
  margin-top: 10px;
  margin-left: 28px;
}
.cardcol{
  margin-top: -30px;
}
}
@media screen and (min-device-height: 700px) and (max-device-height: 825px){
  .button_0,.button_1,.button_2,.button_3{
   margin-bottom: 40px;
   margin-right: -5px;
   margin-left: -5px;
}
  .buttongroup button{
   font-size: 20px;
   width: 165px;
   margin-top: 25px;
   text-align: left;
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
.pro{
  margin-top: 12%
}
.button_0,.button_1,.button_2,.button_3{
   margin: 5%;
   margin-bottom: 20px;
}
.progress{
  height: 40px;
  font-size: 30px;
}
@keyframes square {
  50% {
        opacity: 1;
        transform: translateY(-800px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1200px) rotate(180deg);
      }
} 
}
@media screen and (min-device-width: 950px) and (max-device-width: 1200px){
  li{
    bottom: -250px;
  }
   .buttongroup button{
   font-size: 30px;
}
.quizgame {
  height: 100%;
  width: 100%;
}
.container{
  margin-top: 25%;
}
.cardcol{
  margin-top: -15%;
}
.pro{
  margin-top: 8%
}
@keyframes square {
  50% {
        opacity: 1;
        transform: translateY(-800px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1500px) rotate(180deg);
      }
}
}
</style>
