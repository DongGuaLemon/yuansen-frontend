<template>
 <div>
  <div class="loading">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
    <span>.</span>
  </div>  
  <b-modal ref="myModalRef" hide-footer centered no-close-on-backdrop title="輸入驗證號碼">
      <div class="d-block text-center">
        <form>
        <h3>請輸入手機號碼或取驗證</h3>
          <input type="text" style="margin:5px" placeholder="輸入手機號碼" required/>
          <b-button type="submit" style="display:inline">獲得驗證碼</b-button>
          <br><br>
        <h3>請輸入驗證代碼</h3>
        <input type="text" style="margin:5px" required/>
        <b-button class="mt-3" type="submit" variant="outline-danger" block @click="submitnum">送出驗證碼</b-button>
        </form>
      </div>
      
    </b-modal>
 </div>
</template>
<script>
export default {
  methods:{
    model(){
      setTimeout(() => {
        this.$refs.myModalRef.show()
        console.log('123')
      }, 4000);
    },
    submitnum(){
      this.$router.push({path:'/quizgame'})
    }
  },
  mounted(){
    this.model();
  }
}
</script>
<style>

.loading{
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  position: absolute;
  text-align: center;
  padding-top: 20%;
}
.loading span{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: rgba(255,255,255,.1);
  display: inline-block;
  transition:all .5s;
  animation: animate 3s infinite; 
}
.loading span:nth-child(1){
animation-delay: .1s;
}
.loading span:nth-child(2){
animation-delay: .2s;
}
.loading span:nth-child(3){
animation-delay: .3s;
}
.loading span:nth-child(4){
animation-delay: .4s;
}
.loading span:nth-child(5){
animation-delay: .5s;
}
.loading span:nth-child(6){
animation-delay: .6s;
}
.loading span:nth-child(7){
animation-delay: .7s;
}
.loading span:nth-child(8){
animation-delay: .8s;
}

@keyframes animate{
  0%{
    color: rgba(255,255,255,.1);
    transform: translateY(0);
    margin-left: 0;
    
  }
  25%{
    color: yellow;
    transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0,0,0,1)
  }
  100%{
    color: rgba(255,255,255,.1);
    transform: translateY(0);
  }
}
</style>
