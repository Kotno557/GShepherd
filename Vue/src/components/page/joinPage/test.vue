<script>
export default {
  props: ["roomTopic"],
  data() {
    return {
      question: [
        {
          name: "氣象報導時常可見「百帕」一詞,下列有關百帕的敘述何者正確?",
          choice: [
            "百帕是氣壓的單位",
            "百帕是溫度的單位",
            "百帕是風速的單位",
            "百帕是下雨的機會",
          ],
          is_multiple: false,
        },
        {
          name: "題目二(多選)",
          choice: ["選項一", "選項二", "選項三", "選項四"],
          is_multiple: true,
        },
        {
          name: "題目三",
          choice: ["選項一", "選項二", "選項三", "選項四"],
          is_multiple: false,
        },
      ],
      questionPointer: 1,
    };
  },
  methods: {
    nextQuestion: function () {
      if (this.questionPointer < this.question.length) {
        this.questionPointer++;
      }
    },
    lastQuestion: function () {
      if (this.questionPointer > 1) {
        this.questionPointer--;
      }
    },
  },
};
</script>

<template>
  <div class="cheet-bar">
    <small>Cheet Board</small><br />
    空
  </div>
  <div id="safe">
    <div class="myfont" style="jusfy-content: center">
      <p class="mb-5">{{ roomTopic }}</p>
      <div class="mt-3 mb-3 overflow-auto" v-bind="questionPointer">
        <h4>{{ question[questionPointer - 1].name }}</h4>
        <div style="justify-content: center; display: flex" class="mt-5 mb-5">
          <ul
            class="list-group myfont"
            v-for="i in question[questionPointer - 1].choice"
          >
            <li class="list-group-item">
              <input
                v-if="question[questionPointer - 1].is_multiple == false"
                class="form-check-input me-4"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <input v-else class="form-check-input me-4" type="checkbox" />
              <label class="form-check-label" for="exampleRadios1">
                {{ i }}
              </label>
            </li>
          </ul>
        </div>
        {{ questionPointer }} / {{ question.length }}
      </div>
      <button class="btn btn-light" @click="lastQuestion()">◀上一題</button>
      <button class="btn btn-dark mx-2">繳交</button>
      <button class="btn btn-light" @click="nextQuestion()">下一題▶</button>
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");
h4 {
  font-size: 3.5vmin;
}
.form-control {
  border: 0;
}
.bar {
  justify-content: center;
  width: 15vmin;
  border: solid;
}
#safe {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
body {
  overflow-y: hidden;
}
#safe div {
  text-align: center;
}
.cheet-bar {
  background-color: rgba(205, 207, 204, 0.6);
  position: absolute;
  top: 5vmin;
  left: 2vmin;
  border: 1px black solid;
  height: 200px;
  width: 200px;
}
.myfont {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 2vmin;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
}
</style>
