<template>
<div>
  <b-button size="lg" class="btns3" @click="showModal">
      新增
    </b-button>
  <b-modal ref="myModalRef" hide-footer centered no-close-on-backdrop title="新增題目與答案">
      <div class="d-block ">
        <form>
          <h1>請輸入問題</h1>
          <b-form-textarea id="textarea1"
                     v-model="question.text"
                     @input="maininput"
                     maxlength="30"
                     placeholder="Enter something"
                     :state="state"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
     
      <div inline-block>
      <label  for="inlineFormInputName2">answer1</label>
      <b-input class="mb-2 mr-sm-2" v-model="question.answer1" id="inlineFormInputName2" placeholder="答案一" required/>
      <label  for="inlineFormInputGroupUsername2">answer2</label>
      <b-input  class="mb-2 mr-sm-2" v-model="question.answer2" id="inlineFormInputGroupUsername2" placeholder="答案二" required/>
      <label  for="inlineFormInputGroupUsername3">answer3</label>
      <b-input  class="mb-2 mr-sm-2 " v-model="question.answer3" id="inlineFormInputGroupUsername3" placeholder="答案三" required/>
      <label  for="inlineFormInputGroupUsername4">answer4</label>
      <b-input  class="mb-2 mr-sm-2" v-model="question.answer4" id="inlineFormInputGroupUsername4" placeholder="答案四" required/>
      </div>
    <b-form-group label="請選擇正確答案">
      <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="question.selected"
                          :options="options"
                          name="radioBtnOutline" />
    </b-form-group>
    <b-form-file v-model="question.file2" :state="Boolean(question.file2)" placeholder="選擇圖片" name="avatar" required accept="image/jpeg, image/png" @change="handleUpload">
    </b-form-file>
    <b-button @click="againaxios" style="margin-top:10px" size="lg" variant="success">送出</b-button>
     </form>
    </div>
  </b-modal>
</div>
</template>
<script>
export default {
  data() {
    return {
      question:{
        text: "",
        selected: 'radio2',
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        file2:null
      },
      state: "valid",
      options: [
        { text: '答案1', value: 'radio1' },
        { text: '答案2', value: 'radio2' },
        { text: '答案3', value: 'radio3' },
        { text: '答案4', value: 'radio4' }
      ],
      
    };
  },
  methods: {
    maininput() {
      let len = this.question.text;
      if (len.length == 30) {
        this.state = "invalid";
      }
    },
    showModal() {
      this.$refs.myModalRef.show();
    },
    file(){
      console.log(this.question.file2)
    },
    handleUpload(avatar) {
            console.log(avatar)
            let formData = new FormData();
            formData.append('formData', avatar, avatar.name);
            console.log(avatar)
            console.log(formData)

    },
    againaxios(){
     console.log("emit")
     console.log(this.question)
     // if axios success
    //  this.question.text="";
    //  this.question.answer1="";
    //  this.question.answer2="";
    //  this.question.answer3="";
    //  this.question.answer4="";
    //  this.question.file2=null;
     this.$refs.myModalRef.hide();
     this.$emit('againaxios')
    }
  }
};
</script>
<style>
.btns3{
  width: 50%;
}
</style>
