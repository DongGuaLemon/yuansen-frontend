<template>
  <div>
    <b-container>
      <b-row >
        <b-col>
          <b-card v-for="(item,index) in question"
            :key="item.id"
            :title="item.title"
            tag="article"
            style="margin:2%;height:20rem;max-width: 20rem;display:inline-block;vertical-align: top"
            class="mb-2 text-center">
          <h6 slot="header" class="mb-2">資料修改</h6>
          <p class="card-text">
            {{item.main}}
          </p>
          <div class="btns">
            <questionset @againaxios="func"></questionset>
            <b-button size="lg" class="btns2" variant="danger" @click="del(index)">刪除</b-button>
          </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import questionset from "./questionset.vue";
export default {
  data() {
    return {
      question: [
        {
          title: "card title",
          main:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          id: "1"
        },
        {
          title: "card title1",
          main: "Some quick example text to build on the card title and .",
          id: "2"
        },
        {
          title: "card title2",
          main:
            "Some quick example text to build on the card title and card's content.",
          id: "3"
        },
        {
          title: "card title3",
          main:
            "Some quick example text to build on the card title and of the card's content.",
          id: "4"
        },
        {
          title: "card title4",
          main:
            "Some quick example text to build on the card title and the card's content.",
          id: "5"
        }
      ]
    };
  },
  methods: {
    del(index) {
      this.question.splice(index, 1);
      console.log(this.question);
    },
    func() {
      console.log("again");
    }
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
