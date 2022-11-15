<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
      roomid: this.$route.params.roomId,
      poll: [
        {
          type: "forms_add_on",
          title: "甚麼是你最愛的水果？",
          selection: ["蘋果", "香蕉", "芭樂", "木瓜"],
          multiple: false,
        },
        {
          type: "edit_square",
          title: "隨堂考試",
          question: [
            {
              name: "問題一",
              option: ["選項一", "選項二", "選項三", "選項四"],
              multiple: true,
            },
            {
              name: "問題二",
              option: ["選項一", "選項二", "選項三", "選項四"],
              multiple: false,
            },
          ],
        },
        {
          type: "cloudy",
          title: "下次投票主題",
          limit: null,
        },
        {
          type: "sort",
          title: "水果喜好排名",
          item: [
            "香蕉",
            "蘋果",
            "奇異果",
            //全聯三狗...
          ],
        },
        {
          type: "star_rate",
          title: "本次活動評價",
          max_star: null,
        },
      ],
      view_poll: -1,
    };
  },
  methods: {
    jumpToBack() {
      window.location.href = `/Gshepherd/dashboard/${this.userId}`;
    },
    jumpToLogin: function () {
      window.location.href = "/Gshepherd/login";
    },
    trace: function (i) {
      this.view_poll = parseInt(i);
    },
    myclose: function () {
      this.view_poll = -1;
    },
    rename() {
      console.log(this.$refs.name.value);
      this.poll[this.view_poll].title = this.$refs.name.value;
    },
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200"
  />

  <div id="page">
    <nav>
      <span class="material-symbols-outlined">
        <button class="btn" @click="jumpToBack()">arrow_back</button>
      </span>
      <div id="band">#{{ this.roomid }}</div>
      <span class="material-symbols-outlined">
        <button class="btn" @click="jumpToLogin()">logout</button>
      </span>
    </nav>
    <div id="middle">
      <div id="sheet" class="flex-center">
        <div id="section1">
          <ul class="list-group myfont" style="width: 100%; font-size: 2vmin">
            <li
              class="list-group-item active flex-center"
              style="justify-content: space-between"
            >
              <text>活動列表：</text>
              <button style="float: right" class="btn btn-dark">
                + 新增活動
              </button>
            </li>
            <li
              class="list-group-item list"
              v-for="(item, index) in this.poll"
              style="display: flex"
              @click="trace(index)"
            >
              <span class="material-symbols-outlined mx-3">
                {{ item.type }}
              </span>
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div id="section2">
          <ul class="list-group myfont" style="width: 100%; font-size: 2vmin">
            <li
              class="list-group-item active flex-center"
              style="justify-content: space-between"
            >
              <text>{{
                this.view_poll < 0 ? "null" : this.poll[this.view_poll].title
              }}</text>
              <button
                style="float: right"
                class="btn btn-dark"
                @click="myclose()"
              >
                {{ this.view_poll < 0 ? "？" : "Ｘ" }}
              </button>
            </li>
            <li
              v-if="this.view_poll < 0"
              style="
                height: 64.25vmin;
                max-height: 64.25vmin;
                overflow: auto;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <h4>請選擇一個活動...</h4>
            </li>
            <li
              v-else
              class="list-group-item"
              style="height: 64.25vmin; max-height: 64.25vmin; overflow: auto"
            >
              <div class="child">
                <h5>名稱：</h5>
                <div style="display: flex; margin-left: 2rem">
                  <input
                    type="text"
                    :value="this.poll[this.view_poll].title"
                    ref="name"
                    placeholder="重新命名"
                  />
                  <button
                    class="btn btn-secondary"
                    @click="rename()"
                    style="font-size: 0.5rem"
                  >
                    修改名稱
                  </button>
                </div>
              </div>
              <div
                v-if="'selection' in this.poll[this.view_poll]"
                class="child"
              >
                <h5>選項：</h5>
                <div
                  v-for="(item, index) in this.poll[this.view_poll].selection"
                  style="margin-left: 2rem"
                >
                  <input
                    type="text"
                    v-model="this.poll[this.view_poll].selection[index]"
                  />
                </div>
                <button
                  class="btn btn-secondary"
                  style="margin-left: 2rem; font-size: 0.5rem"
                  @click="this.poll[this.view_poll].selection.push('')"
                >
                  + 新增選項
                </button>
                <button
                  class="btn btn-secondary"
                  style="font-size: 0.5rem"
                  @click="this.poll[this.view_poll].selection.pop()"
                >
                  - 刪除選項
                </button>
              </div>
              <div v-if="'multiple' in this.poll[this.view_poll]" class="child">
                <h5>是否多選：</h5>
                <div class="form-check" style="margin-left: 2rem">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="this.poll[this.view_poll].multiple"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Yes
                  </label>
                </div>
              </div>
              <div v-if="'question' in this.poll[this.view_poll]" class="child">
                <h5>問題：</h5>
                <div
                  v-for="(item, index) in this.poll[this.view_poll].question"
                  style="margin-left: 2rem"
                >
                  <input
                    type="text"
                    v-model="this.poll[this.view_poll].question[index].name"
                  />
                  <div
                    style="margin-left: 2rem"
                    v-for="(item_, tindex_) in item.option"
                  >
                    <input
                      type="text"
                      v-model="
                        this.poll[this.view_poll].question[index].option[
                          tindex_
                        ]
                      "
                    />
                  </div>
                  <button
                    class="btn btn-light"
                    style="margin-left: 2rem; font-size: 0.5rem"
                    @click="
                      this.poll[this.view_poll].question[index].option.push('')
                    "
                  >
                    + 新增選項
                  </button>
                  <button
                    class="btn btn-light"
                    style="font-size: 0.5rem"
                    @click="
                      this.poll[this.view_poll].question[index].option.pop()
                    "
                  >
                    - 刪除問題
                  </button>
                  <div class="form-check" style="margin-left: 2rem">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      v-model="
                        this.poll[this.view_poll].question[index].multiple
                      "
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      多選題
                    </label>
                  </div>
                </div>
                <button
                  class="btn btn-secondary"
                  style="margin-left: 2rem; font-size: 0.5rem"
                  @click="
                    this.poll[this.view_poll].question.push({
                      name: '',
                      option: [''],
                      multiple: false,
                    })
                  "
                >
                  + 新增問題
                </button>
                <button
                  class="btn btn-secondary"
                  style="font-size: 0.5rem"
                  @click="this.poll[this.view_poll].question.pop()"
                >
                  - 刪除問題
                </button>
              </div>
              <div v-if="'limit' in this.poll[this.view_poll]" class="child">
                <h5>每人想法限制：</h5>
                <div style="margin-left: 2rem">
                  <input
                    type="text"
                    v-model="this.poll[this.view_poll].limit"
                  />
                  個
                </div>
              </div>
              <div v-if="'item' in this.poll[this.view_poll]" class="child">
                <h5>排名：</h5>
                <div
                  v-for="(item, index) in this.poll[this.view_poll].item"
                  style="margin-left: 2rem"
                >
                  <input
                    type="text"
                    v-model="this.poll[this.view_poll].item[index]"
                  />
                </div>
                <button
                  class="btn btn-secondary"
                  style="margin-left: 2rem; font-size: 0.5rem"
                  @click="this.poll[this.view_poll].item.push('')"
                >
                  + 新增排名
                </button>
                <button
                  class="btn btn-secondary"
                  style="font-size: 0.5rem"
                  @click="this.poll[this.view_poll].item.pop()"
                >
                  - 刪除排名
                </button>
              </div>
              <div v-if="'max_star' in this.poll[this.view_poll]" class="child">
                <h5>最大星星數：</h5>
                <div style="margin-left: 2rem">
                  <input
                    type="text"
                    v-model="this.poll[this.view_poll].max_star"
                  />
                  顆
                </div>
              </div>
              <div class="child">
                <h5>Raw Data:</h5>
                <div style="margin-left: 2rem">
                  {{ this.poll[this.view_poll] }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img id="logo" src="../../../assets/GShepherd Logo.png" />
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");
#sheet {
  width: 85vw;
  height: 75vh;
  background-color: rgba(175, 179, 174, 0.6);
  border-radius: 2vmin;
  max-height: fit-content;
}
#logo {
  height: 8vh;
  width: fit-content;
  position: absolute;
  bottom: 0;
}
#cheetBar {
  background-color: rgba(205, 207, 204, 0.6);
  position: absolute;
  bottom: 5vmin;
  left: 2vmin;
  border: 1px black solid;
  height: 200px;
  width: 200px;
}
nav {
  width: 100vm;
  height: 10vh;
  background-color: #d0d4cf;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav span {
  margin-left: 10vw;
  margin-right: 10vw;
}
.material-symbols-outlined .btn {
  font-size: 4vmin;
}
.gray-hover a:hover {
  background-color: rgba(243, 243, 243, 0.74);
}

.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: rgb(122, 122, 122);
  border-color: rgb(205, 207, 204);
}
nav #band {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 4vmin;
}
#page {
  width: 100vw;
  height: 100vh;
}
#middle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vm;
  height: 90vh;
  background-image: url(./background.png);
  background-size: cover;
}
#btm {
  width: 100vm;
  height: 10vh;
  border-top: 2px rgba(219, 211, 211, 0.4) solid;
  display: flex;
  align-content: center;
  justify-content: center;
}

.list-group-item .child {
  margin: 2vmin;
}
#section1 {
  background-color: rgba(175, 179, 174, 0.6);
  border-radius: 2vmin 0 0 2vmin;
  height: 95%;
  width: 35%;
  max-height: max-content;
  overflow: auto;
}
#section2 {
  background-color: rgba(175, 179, 174, 0.6);
  border-radius: 0 2vmin 2vmin 0;
  height: 95%;
  width: 35%;
}
.myfont {
  font-family: "Noto Sans TC", sans-serif;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list:hover {
  background-color: rgba(243, 243, 243, 0.74);
  cursor: pointer;
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

* {
  font-size: large;
}
</style>
