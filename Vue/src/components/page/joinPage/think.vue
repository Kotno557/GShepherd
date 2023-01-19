<script>
import axios from 'axios';
import Global from '../../../Global.js';
export default {
  props: ['roomTopic', 'id'],
  data() {
    return {
      anwser: '',
      lock: false
    };
  },
  methods: {
    submit() {
      console.log(this.anwser);
      axios.post(`${Global.backend}/record/`, {
        "id": this.id,
        "eventId": this.id,
        "userId": this.id,
        "option": this.anwser
      })
        .then(response => {
          this.lock=true;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>

<template>
  <div id="safe">
    <div class="myfont mb-5" style="jusfy-content: center">
      <h4>{{ roomTopic }}</h4>
      <div style="text-align: left; max-height: 45vh" class="mt-1 mb-3 overflow-auto" v-if="!lock">
        <ul class="list-group myfont" style="width: 35vw">
          <li class="list-group-item">
            <input class="form-control" type="text" placeholder="Type Some Idea..." v-model="anwser" />
          </li>
        </ul>
      </div>
      <!-- <button class="btn btn-light" @click="anwser.push({ name: '' })">
        + Idea
      </button> -->
      <div style="text-align: center; max-height: 45vh;" class="mt-1 mb-3 overflow-auto" v-else>
        <h5>已提交{{ roomTopic }}活動資料！</h5>
      </div>
      <button class="btn btn-dark mx-2" @click="submit()" :disabled="anwser == ''">繳交</button>
      <!-- <button class="btn btn-light" @click="anwser.length > 1 ? anwser.pop() : pass">
        - Idea
      </button> -->
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
