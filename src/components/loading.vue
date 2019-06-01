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
    <div class="loader loader5">
      <svg width="150px" height="150px" viewBox="0 0 80 80" fill="transparent">
        <circle cx="40" cy="40" r="8" stroke="#4FB95C"/>
      </svg>
    </div>
  </div> 
  <b-modal ref="myModalRef" id="modal"  hide-footer centered no-close-on-backdrop title="Sign In">
      <div class="d-block text-center">
        <form @submit.prevent="onSubmit($event)">
        <h3 class="modalh3">請輸入手機號碼獲取驗證</h3>
          <input v-model="phone" class="modalinp" type="text" style="margin:5px" placeholder="輸入手機號碼"/>
          <b-button id="modalbutn" class="mt-3" type="submit" variant="outline-danger" block @click="subphone" style="display:block;margin:0 auto;">獲得驗證碼</b-button>
          <br><br>
        <h3 class="modalh3">請輸入驗證代碼</h3>
        <div @keyup.enter="submitnum">
          <input v-model="verification" class="modalinp" type="text" style="margin:5px"   placeholder="輸入驗證碼" required/>
          <p v-show="verificationshow">驗證碼輸入錯誤</p>
          <b-button id="modalbutn" class="mt-3" variant="outline-danger" block @click="submitnum">送出驗證碼</b-button>
        </div>
        </form>
      </div>
      
    </b-modal>
 </div>
</template>
<script>
/*import { SIGNUP_MUTATION } from '@/graphql'*/
export default {
  data(){
    return{
      userId:"aabb",
      phone:"",
      verification:"",
      verificationshow:false
    }
  },
  methods:{
    model(){
      setTimeout(() => {
        this.$refs.myModalRef.show()
      }, 4000);
    },
    subphone(){
      if(this.phone != ""){
      this.$apollo
          .mutate({
            mutation:SIGNUP_MUTATION,
            variables: {
                       phone:this.phone 
                    }
          }).then(data=>{
          console.log(data)
          }).catch(error=>{
          console.log(error)
          })}
    },
    submitnum(){
      if(this.verification=="123"){
        this.$router.push({ path: '/quizgame'})
      }
      else{
        this.verificationshow=true
      }
    },
    onSubmit(event){
      //提交事件不重新載入頁面
      event.preventDefault()
    }
  },
  mounted(){
    this.model();
  }
}
</script>
<style>
#modalbutn:hover{
  background-color: #f9a03f;
}
#modalbutn{
  border-color: #f9a03f;
  color: black;
}
@keyframes loader5 {
  0% {
    opacity: 1;
    transform: scale(1);
    stroke-width: 3;
  }
  60% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
    transform: scale(5);
    stroke-width: 0;
  }
}

.loader5 svg circle {
  transform-origin: center center;
  transform: scale(1);
  animation: loader5 1.5s linear infinite;
}
.loader span {
  font-size: 12px;
  position: absolute;
  bottom: 16px;
}
#modal___BV_modal_header_{
  background-color:#f9a03f
}
.loading{
  width: 100%;
  height: 100%;
     background: url("../assets/main.svg");
  background-size: cover;
  background-attachment: fixed; 
  background-position: center;
   background-repeat: no-repeat;
  position: absolute;
  text-align: center;
  padding-top: 20%;
}
.loading span{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 80px;
  font-weight: 800;
  color: rgba(255,255,255,.1);
  display: inline-block;
  transition:all .5s;
  animation: animate 3s infinite; 
  -webkit-transition:all .5s;
  -webkit-animation: animate 3s infinite; 
}
.loading span:nth-child(1){
-webkit-animation-delay: .1s;
animation-delay: .1s;
}
.loading span:nth-child(2){
-webkit-animation-delay: .2s;
animation-delay: .2s;
}
.loading span:nth-child(3){
-webkit-animation-delay: .3s;
animation-delay: .3s;
}
.loading span:nth-child(4){
-webkit-animation-delay: .4s;
animation-delay: .4s;
}
.loading span:nth-child(5){
-webkit-animation-delay: .5s;
animation-delay: .5s;
}
.loading span:nth-child(6){
-webkit-animation-delay: .6s;
animation-delay: .6s;
}
.loading span:nth-child(7){
-webkit-animation-delay: .7s;
animation-delay: .7s;
}
.loading span:nth-child(8){
-webkit-animation-delay: .8s;
animation-delay: .8s;
}
@-webkit-keyframes animate{
  0%{
    color: rgba(255,255,255,.3);
    -webkit-transform: translateY(0);
    margin-left: 0;
    
  }
  25%{
    color: #fd8607;
    -webkit-transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0,0,0,1)
  }
  100%{
    color: rgba(255,255,255,.3);
    -webkit-transform: translateY(0);
  }
}
@keyframes animate{
  0%{
    color: rgba(255,255,255,.3);
    transform: translateY(0);
    margin-left: 0;
    
  }
  25%{
    color: #fd8607;
    transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0,0,0,1)
  }
  100%{
    color: rgba(255,255,255,.3);
    transform: translateY(0);
  }
}
@media screen and (min-width: 350px) and (max-width: 450px){
  .loading span{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: 800;
  color:#fd8607;
  display: inline-block;
  transition:all 0s;
  animation: animate 0s 1;
  -webkit-transition:all 0s;
  -webkit-animation: animate 0s 1; 
}
}
@media screen and (min-width: 750px) and (max-width: 851px){
  .loading span{
    font-size: 80px;
    font-weight: 800;
  }
  .modalh3{
    font-size: 35px;
  }
  #modalbutn{
    font-size: 30px;
  }
  .modalinp{
    font-size: 30px;
  }
}
@media screen and (min-width: 950px) and (max-width: 1200px){
  .loading span{
    font-size: 80px;
    font-weight: 800;
  }
  .modalh3{
    font-size: 35px;
  }
  #modalbutn{
    font-size: 30px;
  }
  .modalinp{
    font-size: 30px;
  }
  .modal-title{
    font-size: 40px;
  }
}
</style>
