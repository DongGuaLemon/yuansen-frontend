<template>
  <div class="quizgame">
    <b-container>
        <b-row class="justify-content-md-center mb-5">
          <b-col cols="2" md="1" lg="0"></b-col>
          <b-col cols="8"  md="6" lg="6"><b-progress class="progress w-60 mb-5" :value="counter" :max="max" show-value animated></b-progress></b-col>
          <b-col offset="3" offset-md="1" offset-lg="0" class="timer"><div class="circle"><span class="timer1">{{timer}}</span></div></b-col>
        </b-row>
      <b-container>
        <b-row class="mb-2">
          <b-col>
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
                    > 
              <button
                    @click="sub(index)" 
                    :disabled="item.correct" 
                    class="btn button1" 
                    :class="{correct:item.isactive}"
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
export default {
  data() {
    return {
      counter: 8,
      max:10,
      timer:10,
      topic:{
        main:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque antesollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felisin faucibus.",
        imgsrc:"",
      },
      button:[
        {ans:"answer1",isactive:true},
        {ans:"answer2",isactive:false},
        {ans:"answer3",isactive:false},
        {ans:"answer4",isactive:false}
      ],
      test:false,
      isactive:false,
      iserror:true,
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
           alert("timeup")
           window.clearInterval(timer);
        }
      },1000)
    },
    sub(index){
      console.log(index)
    }
  },
  mounted(){
    this.times();
  }
};
</script>
<style scoped>
.quizgame {
  height: 100%;
  width: 100%;
  margin-top: 5%;
}
.progress {
  margin-top: 5%;
}
.buttongroup{
  margin-top: 10%;
}
.timer{
  margin-top: 16px;

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
   -moz-transition:0s 1s;
   transition:0s 1s;
} 
p{
  font-size: 25px;
}
.correct:active {
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
}
</style>
