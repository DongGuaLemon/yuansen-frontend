<template>
  <div class="load">
    <transition appear
     appear-active-class="fade-enter-active"
     @before-appear="beforeAppear"
     @appear="appear"
     @after-appear="afterAppear">
      <span class="text1">Welcome</span>
    </transition>
      <span class="text2">yuan sen</span>
    <transition appear
                name="fade2">
   <div class="buttongroup">
      <a href="https://www.yuan-sen.tw/"><button class="btn button1">原生植物園首頁</button></a>
      <router-link :to="{name:'loading'}"><button class="btn button2">進入遊戲</button></router-link>
      <a href="https://yuansen.chengxun.tw/"><button class="btn button3">社會企業責任</button></a>
    </div>
    </transition>
    <div :class="{secret:isActive}" @click="secret">
      <b-modal ref="myModalRef" 
               hide-footer 
               centered 
               no-close-on-backdrop 
               title="登入">
      <div>
        <form>
          <h3>請輸入帳號</h3>
          <b-form-input type="text" style="margin:5px" placeholder="輸入帳號" required></b-form-input>
            <br><br>
          <h3>請輸入密碼</h3>
          <b-form-input type="password" style="margin:5px" placeholder="輸入密碼" required></b-form-input>
          <b-button class="mt-3" type="submit" variant="outline-info" block @click="submitnum">送出</b-button>
        </form>
      </div>
      </b-modal>
    </div>
  </div>  
</template>
<script>
export default {
data(){
  return{
    secertclick:0,
    isActive:true
  }
},
methods:{
  submitnum(){
    console.log(123)
    this.$router.push({path:"/secretpage"})
  },
  secret(){
    //login click 5 times
    this.secertclick++;
    if(this.secertclick==5){
      this.$refs.myModalRef.show()
      this.isActive=false
      this.secertclick=0;
    }
  },
  /*social(){
    this.$router.push({path:'/HelloWorld'})
  },*/
  /*game(){
    this.$router.push({path:'/loading'})
  },*/
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
  text-align: center;
  font-family: sans-serif;
  padding-top:15%; 
  position: fixed;
   background: url("../assets/main1.svg");
  background-size: cover;
  background-attachment: fixed; 
  background-position: center;
   background-repeat: no-repeat;
}
.load span{
  text-transform: uppercase;
  display: block;
  
}
.text1{
  color: #F8D422;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 80px;
  margin-bottom: 10px;
  /*background:white;*/
  position: relative;
  margin-left:7%; 
}
.text2{
  margin-left:1%;
  font-size: 30px;
  color:#F8D422;
  animation: text 3s;
}
.fade-enter-active {
  -webkit-animation: go 2s;
  animation: go 2s;
}
@-webkit-keyframes go {
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
  @keyframes text {
  0%{
      opacity: 0;
  }
  30%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.buttongroup button{
  height: 100%;
  display: inline-block;
  margin: 5%;
  font-size: 30px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3B3D55;
  cursor: pointer;
  background: none;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  padding: 10px;
}
.button1,.button2,.button3{
  color: #fff;
}
.button1:hover,.button2:hover,.button3:hover{
  color: #3B3D55;
}
.btn::before{
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background:#3B3D55;
  z-index: -1;
  -webkit-transition: 0.8s;
  transition: 0.8s;
}
 .button1::before,.button2::before,.button3::before{
  top: 0;
  border-radius: 0 0 50% 50%;
  height: 180%;
} 
.button1:hover::before,.button2:hover::before,.button3:hover::before{
  height: 0%;
}

.fade2-enter-active{
  -webkit-transition: opacity 3s 2s;
  transition: opacity 3s 2s;
}
.fade2-enter{
  opacity: 0;
  
}
.secret{
  width: 150px;
  height: 150px;
  background: red;
  opacity: 0;
}
h3{
  text-align: left;
}
@media screen and (min-width: 350px) and (max-width: 450px){
  .load{
  width: 100%;
  height: 100%;
  /*background: #A8D8B9;*/
  text-align: center;
  font-family: sans-serif;
  padding-top:30%; 
  position: fixed;
}
 .text1{
  color: #F8D422;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 15px;
  margin-bottom: 10px;
  /*background: white;*/
  position: relative;
  margin-left:5%; 
}
@-webkit-keyframes go {
  0%{
    color: black;
    margin-bottom:-40px; 
  }
  30%{
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
  
}
@keyframes go {
  0%{
    color: black;
    margin-bottom:-40px; 
  }
  30%{
    letter-spacing: 26px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}
.buttongroup button{
  height: 100%;
  display:block;
  font-size: 25px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3B3D55;
  cursor: pointer;
  background: none;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  padding: 10px;
   margin: 0 auto;
  padding: 10px;
   margin-top:50px;
} 
}
@media handheld and (min-height: 700px) and (max-height: 825px){
.load{
  padding-top:35%; 
}

}
@media screen and (min-width: 750px) and (max-width: 851px){
  .load{
  width: 100%;
  height: 100%;
  /*background: #A8D8B9;*/
  text-align: center;
  font-family: sans-serif;
  padding-top:27%; 
  position: fixed;
}
 .text1{
  color: #F8D422;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 40px;
  margin-bottom: 10px;
  /*background: white;*/
  position: relative;
  margin-left:5%; 
}
@-webkit-keyframes go {
  0%{
    color: black;
    margin-bottom:-40px; 
  }
  30%{
    letter-spacing: 45px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
}
.buttongroup button{
  height: 100%;
  display: block;
  font-size: 45px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3B3D55;
  cursor: pointer;
  background: none;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
  margin-top:50px;
}
}
@media screen and (min-width: 950px) and (max-width: 1200px){
  .load{
  padding-top:30%; 
}

  .text1{
  color: #F8D422;
  font-size: 100px;
  font-weight: 700;
  letter-spacing: 30px;
  margin-bottom: 10px;
  /*background: white;*/
  position: relative;
  margin-left:5%; 
}
  .buttongroup button{
  height: 100%;
  display: block;
  font-size: 60px;
  font-family: Microsoft JhengHei;
  text-transform: uppercase;
  font-weight: 700;
  border-radius:10px; 
  border:1px solid #3B3D55;
  cursor: pointer;
  background: none;
  -webkit-transition: 0.8s;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
  margin-top:50px;
}
}
</style>
