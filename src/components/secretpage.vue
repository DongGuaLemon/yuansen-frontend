<template>
  <div style="width:100%;display:flex;flex-direction:column">
      <div style="display:flex;justify-content:space-around;flex-wrap: wrap;">
          <b-card v-for="(item,index) in question"
            :key="item.ID"
            :title="item.question"
            tag="article"
            style="max-width:20rem;width:20rem"
            class="mb-2 text-center">
          <h6 slot="header" class="mb-2">題目修改</h6>
          <div class="btns">
            <b-button size="lg" class="btns2" variant="danger" @click="del(index,item.ID)">刪除</b-button>
          </div>
          </b-card>
        <!-- style="margin:2%;height:20rem;max-width: 20rem;display:inline-block;vertical-align: top" -->
      </div>
      <div style="display:flex;justify-content:center">
        <questionset @againaxios="func"></questionset>
      </div>
  </div>
</template>
<script>
import Url from '../axiosurl'
import axios from 'axios'
import questionset from "./questionset.vue";
export default {
  data() {
    return {
      question: [
        
      ]
    };
  },
  methods: {
    del(index,key) {
      this.question.splice(index, 1);
      console.log(this.question);
      console.log(key)
      let vm = this;
      axios({
        method: 'POST',
        url:`${Url.axiosURL()}delquestion`,
        responseType: 'json',
        headers: {
          'Content-type': 'application/json',
          //'Authorization': 'Client-ID' + id
          },
          data:{
            id:key
          }
        }).then(function(response){
            console.log(response.data)
        }).catch(function(error){
            console.log(error)
        })
    },
    func() {
      console.log("again");
    },
    displayQA(){
       let vm = this;
      axios({
        method: 'GET',
        url:`${Url.axiosURL()}displayquestion`,
        responseType: 'json',
        headers: {
          'Content-type': 'application/json',
          //'Authorization': 'Client-ID' + id
          },
        }).then(function(response){
            console.log(response.data)
            vm.question=response.data.data
        }).catch(function(error){
            console.log(error)
        })
    }
  },
  mounted(){
    this.displayQA();
  },
  components: {
    questionset
  }
};
</script>
<style>
.btns2 {
  margin-top: 5%;
  width: 50%;
}
</style>
