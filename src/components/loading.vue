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
    <div class="test1"></div>
  </div> 
   
  <b-modal ref="myModalRef" id="modal" hide-footer centered no-close-on-backdrop title="輸入驗證號碼">
      <div class="d-block text-center">
        <form>
        <h3 class="modalh3">請輸入手機號碼獲取驗證</h3>
          <input class="modalinp" type="text" style="margin:5px" placeholder="輸入手機號碼" required/>
          <b-button id="modalbutn" type="submit" style="display:inline">獲得驗證碼</b-button>
          <br><br>
        <h3 class="modalh3">請輸入驗證代碼</h3>
        <input class="modalinp" type="text" style="margin:5px" placeholder="輸入驗證碼" required/>
        <b-button id="modalbutn" class="mt-3" type="submit" variant="outline-danger" block @click="submitnum">送出驗證碼</b-button>
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
    color: rgba(255,255,255,.1);
    -webkit-transform: translateY(0);
    margin-left: 0;
    
  }
  25%{
    color: yellow;
    -webkit-transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0,0,0,1)
  }
  100%{
    color: rgba(255,255,255,.1);
    -webkit-transform: translateY(0);
  }
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
.test1{
  width:100px;
    height:50px;
    background:#808a87;
    position:relative;
    animation:TestMove 2s infinite; /*IE*/
    -moz-animation:TestMove 2s infinite; /*FireFox*/
    -webkit-animation:TestMove 2s infinite; /*Chrome, Safari*/
    border-radius: 50px;
}
@-webkit-keyframes TestMove{
    from {left:27%;}
    0%{
      transform:scaleX(1)
    }
    50%{
     transform:scaleX(1.5)
    }
    100%{
     transform:scaleX(1)
    }
    to {left:68%;}
}
@media screen and (min-width: 350px) and (max-width: 450px){
  .test1{
     animation:TestMove 2s infinite; /*IE*/
    -moz-animation:TestMove 2s infinite; /*FireFox*/
    -webkit-animation:TestMove 2s infinite; /*Chrome, Safari*/
  }
  @-webkit-keyframes TestMove{
    from {left:10%;}
    0%{
      -webkit-transform:scaleX(1)
    }
    50%{
     -webkit-transform:scaleX(1.5)
    }
    100%{
     -webkit-transform:scaleX(1)
    }
    to {left:65%;}
}
@keyframes TestMove{
    from {left:10%;}
    0%{
      transform:scaleX(1)
    }
    50%{
     transform:scaleX(1.5)
    }
    100%{
     transform:scaleX(1)
    }
    to {left:65%;}
}
}
@media screen and (min-width: 750px) and (max-width: 851px){
  .test1{
     animation:TestMove 2s infinite; /*IE*/
    -moz-animation:TestMove 2s infinite; /*FireFox*/
    -webkit-animation:TestMove 2s infinite; /*Chrome, Safari*/
  }
  .loading span{
    font-size: 80px;
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
  @-webkit-keyframes TestMove{
    from {left:10%;}
    0%{
      -webkit-transform:scaleX(1)
    }
    50%{
     -webkit-transform:scaleX(1.5)
    }
    100%{
     -webkit-transform:scaleX(1)
    }
    to {left:80%;}
}
@keyframes TestMove{
    from {left:10%;}
    0%{
      transform:scaleX(1)
    }
    50%{
     transform:scaleX(1.5)
    }
    100%{
     transform:scaleX(1)
    }
    to {left:80%;}
}
}
@media screen and (min-width: 950px) and (max-width: 1200px){
    .test1{
     animation:TestMove 2s infinite; /*IE*/
    -moz-animation:TestMove 2s infinite; /*FireFox*/
    -webkit-animation:TestMove 2s infinite; /*Chrome, Safari*/
  }
  .loading span{
    font-size: 80px;
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
  @-webkit-keyframes TestMove{
    from {left:10%;}
    0%{
      -webkit-transform:scaleX(1)
    }
    50%{
     -webkit-transform:scaleX(1.5)
    }
    100%{
     -webkit-transform:scaleX(1)
    }
    to {left:80%;}
}
@keyframes TestMove{
    from {left:10%;}
    0%{
      transform:scaleX(1)
    }
    50%{
     transform:scaleX(1.5)
    }
    100%{
     transform:scaleX(1)
    }
    to {left:80%;}
}
}
</style>
