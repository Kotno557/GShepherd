<script>
//
import axios from 'axios';
import Global from '../../../Global.vue';

export default {
  data() {
    return {
      userId: this.$route.params.id,
      roomid: this.$route.params.roomId,
      eventType: { 1: "check_box", 2: "cloudy", 3: "token" },
      event: [
        {
          "options": [],
          "roomId": "63badf188b1be06bd2358e1d",
          "name": "下次聚會投票",
          "multyple": "",
          "active": true,
          "category": 1,
          "id": "63be7296b7d716268b179fdb"
        },
        {
          "roomId": "63badf188b1be06bd2358e1d",
          "name": "想想下次的開會主題",
          "active": true,
          "category": 2,
          "id": "63be7296b7d716268b179fdb",
          "limits": ""
        },
        {
          "phone": "",
          "party_name": "",
          "address": "",
          "roomId": "63badf188b1be06bd2358e1d",
          "name": "年終加菜抽大獎",
          "active": true,
          "category": 3,
          "id": "63be7296b7d716268b179fdb"
        }
      ],
      view_poll: -1,
      new_name: "",
      new_type: ""
    };
  },
  methods: {
    jumpToBack() {
      window.location.href = `/dashboard/${this.userId}`;
    },
    jumpToLogin: function () {
      window.location.href = "/login";
    },
    trace: function (i) {
      this.view_poll = parseInt(i);
    },
    myclose: function () {
      this.view_poll = -1;
    },
    rename() {
      console.log(this.$refs.name.value);
      this.event[this.view_poll].name = this.$refs.name.value;
    },
    change() {
      let now = this.event[this.view_poll];
      axios.put(`${Global.backend}/event/${now.id}`, {
        "category": now.category,
        "roomId": now.roomId,
        "name": now.name,
        "active": true,
        "options": now.options
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.valid = false;
        });
    },
    new_event() {
      axios.put(`${Global.backend}/event/`, {
        "category": this.new_type,
        "roomId": this.roomid,
        "name": this.new_name,
        "options": []
      })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.event.push(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    del() {
      axios.delete(`${Global.backend}/event/${now.id}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.valid = false;
        });
      this.event = Global.array_delete(this.event, this.view_poll);
      this.view_poll = -1;
      console.log(this.event);
    }
  },
};
</script>

<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />

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
            <li class="list-group-item active flex-center" style="justify-content: space-between">
              <text>活動列表：</text>
              <dev style="float: right">
                <a :href="`/display/${this.roomid}`" target="_blank">
                  <button class="btn btn-dark m-1">
                    👀 查看活動展示
                  </button>
                </a>
                <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#createModal">
                  + 新增活動
                </button>

              </dev>
            </li>
            <li class="list-group-item list" v-for="(item, index) in this.event" style="display: flex"
              @click="trace(index)">
              <span class="material-symbols-outlined mx-3">
                {{ this.eventType[item.category] }}
              </span>
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div id="section2">
          <ul class="list-group myfont" style="width: 100%; font-size: 2vmin">
            <li class="list-group-item active flex-center" style="justify-content: space-between">
              <text>{{
                this.view_poll < 0 ? "null" : event[view_poll].name
              }}</text>
                  <button style="float: right" class="btn btn-dark" @click="myclose()">
                    {{ this.view_poll < 0 ? "功能開發維護中" : "Ｘ" }} </button>
            </li>
            <li v-if="this.view_poll < 0" style="
                height: 64.25vmin;
                max-height: 64.25vmin;
                overflow: auto;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
              <h4>請選擇一個活動...</h4>
            </li>
            <li v-else class="list-group-item" style="height: 64.25vmin; max-height: 64.25vmin; overflow: auto">
              <div class="child">
                <h5>名稱：</h5>
                <div style="display: flex; margin-left: 2rem">
                  <input type="text" ref="name" placeholder="重新命名" v-model="event[view_poll].name" />
                </div>
              </div>
              <div v-if="event[view_poll].category === 1">
                <h5>選項：</h5>
                <div v-for="(item, index) in event[view_poll].options" style="margin-left: 2rem">
                  <input type="text" v-model="event[view_poll].options[index]" />
                </div>
                <button class="btn btn-secondary" style="margin-left: 2rem; font-size: 0.5rem"
                  @click="event[view_poll].options.push('')">
                  + 新增選項
                </button>
                <button class="btn btn-secondary" style="font-size: 0.5rem" @click="event[view_poll].options.pop()">
                  - 刪除選項
                </button>
              </div>
              <div>

              </div>
              <!-- <div v-if="event[view_poll].category===">
                <h5>問題：</h5>
                <div v-for="(item, index) in event[view_poll].question" style="margin-left: 2rem">
                  <input type="text" v-model="this.poll[this.view_poll].question[index].name" />
                  <div style="margin-left: 2rem" v-for="(item_, tindex_) in item.option">
                    <input type="text" v-model="
                      this.poll[this.view_poll].question[index].option[
                      tindex_
                      ]
                    " />
                  </div>
                  <button class="btn btn-light" style="margin-left: 2rem; font-size: 0.5rem" @click="
                    this.poll[this.view_poll].question[index].option.push('')
                  ">
                    + 新增選項
                  </button>
                  <button class="btn btn-light" style="font-size: 0.5rem" @click="
                    this.poll[this.view_poll].question[index].option.pop()
                  ">
                    - 刪除問題
                  </button>
                  <div class="form-check" style="margin-left: 2rem">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="
                      this.poll[this.view_poll].question[index].multiple
                    " />
                    <label class="form-check-label" for="flexCheckDefault">
                      多選題
                    </label>
                  </div>
                </div>
                <button class="btn btn-secondary" style="margin-left: 2rem; font-size: 0.5rem" @click="
                  this.poll[this.view_poll].question.push({
                    name: '',
                    option: [''],
                    multiple: false,
                  })
                ">
                  + 新增問題
                </button>
                <button class="btn btn-secondary" style="font-size: 0.5rem"
                  @click="this.poll[this.view_poll].question.pop()">
                  - 刪除問題
                </button>
              </div> -->
              <div v-if="event[view_poll].category === 2" class="child">
                <h5>每人想法限制：</h5>
                <div style="margin-left: 2rem">
                  <input type="text" v-model="event[view_poll].limits" />
                  個
                </div>
              </div>
              <!-- <div v-if="'item' in this.poll[this.view_poll]" class="child">
                <h5>排名：</h5>
                <div v-for="(item, index) in this.poll[this.view_poll].item" style="margin-left: 2rem">
                  <input type="text" v-model="this.poll[this.view_poll].item[index]" />
                </div>
                <button class="btn btn-secondary" style="margin-left: 2rem; font-size: 0.5rem"
                  @click="this.poll[this.view_poll].item.push('')">
                  + 新增排名
                </button>
                <button class="btn btn-secondary" style="font-size: 0.5rem"
                  @click="this.poll[this.view_poll].item.pop()">
                  - 刪除排名
                </button>
              </div>
              <div v-if="'max_star' in this.poll[this.view_poll]" class="child">
                <h5>最大星星數：</h5>
                <div style="margin-left: 2rem">
                  <input type="text" v-model="this.poll[this.view_poll].max_star" />
                  顆
                </div>
              </div>
              <div class="child">
                <h5>Raw Data:</h5>
                <div style="margin-left: 2rem">
                  {{ this.poll[this.view_poll] }}
                </div>
              </div> -->
              <div v-if="event[view_poll].category === 3" class="child">
                <h5>資訊需求：</h5>
                <div style="margin-left: 2rem">
                  電話：
                  <input type="checkbox" v-model="event[view_poll].phone" /><br>
                  名字：
                  <input type="checkbox" v-model="event[view_poll].party_name" /><br>
                  地址：
                  <input type="checkbox" v-model="event[view_poll].address" /><br>
                </div>
              </div>
              <div class="child">
                <button class="btn btn-primary" @click="change()">
                  確定
                </button>
                <button class="btn btn-danger" @click="del()">
                  刪除此活動
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img id="logo" src="../../../assets/GShepherd_Logo.png" />
    </div>
  </div>

  <div class="modal fade" id="createModal" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">加入活動</h4>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <label for="recipient-name" class="col-form-label">請輸入活動名稱：</label>
          <input type="text" class="form-control" id="recipient-name" v-model="new_name">
          <label for="recipient-name" class="col-form-label">請選擇活動類別：</label>
          <select id="cars" name="carlist" form="carform" class="form-select" v-model="new_type">
            <option value=1>投投票</option>
            <option value=2>想想看</option>
            <option value=3>抽抽獎</option>
            <option value=-1>其他（開發維護中）</option>
          </select>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal"
            :disabled="new_name === '' || new_type === ''" @click="new_event()">確認</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">關閉</button>
        </div>

      </div>
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
