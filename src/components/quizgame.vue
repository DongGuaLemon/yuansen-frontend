<template>
  <div class="quizgame">
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center mb-5">
          <b-col cols="2"></b-col>
          <b-col cols="6"><b-progress class="progress w-60 mb-5" :value="counter" :max="max" show-value animated></b-progress></b-col>
          <b-col offset="1" class="timer"><div class="circle"><span class="timer1">{{timer}}</span></div></b-col>
        </b-row>
        <b-row class="mb-5">
          <b-card>
            <b-media no-body>
              <b-media-aside vertical-align="center">
                <b-img :src="topic.imgsrc"/>
              </b-media-aside>
              <b-media-body class="ml-4">
                <h5 class="mt-2">{{topic.title}}</h5>
                <p>
                  {{topic.main}}
                </p>
                <p class="mb-0">
                  {{topic.body}}
                </p>
              </b-media-body>
            </b-media>
          </b-card>
        </b-row>     
        <div class="buttongroup">
          <b-row class="justify-content-md-center" align-h="around">
             <b-col> <button class="btn button1">選項1111111</button></b-col>
             <b-col> <button class="btn button2">選項2222222</button></b-col>
             <b-col> <button class="btn button3">選項3333333</button></b-col>
             <b-col> <button class="btn button4">選項4444444</button></b-col>
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
        title:"Media Title",
        main:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque antesollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felisin faucibus.",
        body:"Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cumsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        imgsrc:"",
      }
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
    times(){
      var vm = this;
      let timer = window.setInterval(function(){
        if(vm.timer--<=0){
           vm.timer=10;
           alert("timeup")
           window.clearInterval(timer);
        }
      },1000)
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
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  
} 

</style>
