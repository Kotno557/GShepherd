<script>
import axios from 'axios';
import Global from '../../../Global';
import Raffle from './raffle.vue';
import Thought from './thought.vue';
import Vote from './vote.vue';

export default {
  data() {
    return {
      roomId: this.$route.params.id,
      roomInfo: {
        "name": "期末尾牙大會",
        "code": "MC44Mz",
        "admins": [
          "63bae430f215b7bd0492d167"
        ],
        "createdBy": "63bae430f215b7bd0492d167",
        "createdAt": "2023-01-18T08:12:26.595Z",
        "updatedAt": "2023-01-18T08:12:26.595Z",
        "id": "63c7a9ea00595faf24977074"
      },
      events: [{
        "options": [],
        "name": "尾牙大獎",
        "address": "true",
        "roomId": "63b9823dedd082accf34c947",
        "active": true,
        "category": 3,
        "id": "63bf08966484d41e59995293"
      },
      {
        "options": [
          "圓山",
          "凱薩",
          "長榮"
        ],
        "roomId": "63c7a9ea00595faf24977074",
        "name": "下次員工旅遊飯店",
        "active": true,
        "category": 1,
        "id": "63c81b830c5a87fdaf0b6f1b"
      },
      {
        "options": [],
        "roomId": "63c7a9ea00595faf24977074",
        "name": "新年聚餐地點募集",
        "active": true,
        "category": 2,
        "id": "63c81ba10c5a87fdaf0b6f23"
      },
      {
        "options": [],
        "fullName": true,
        "address": true,
        "phone": true,
        "roomId": "63c7a9ea00595faf24977073",
        "name": "尾牙大獎",
        "active": true,
        "category": 3,
        "id": "63c8205631193c9646274492"
      },
      {
        "fullName": true,
        "address": true,
        "phone": true,
        "roomId": "63c7a9ea00595faf24977073",
        "name": "尾牙抽獎11",
        "active": false,
        "category": 3,
        "options": [],
        "id": "63c8357ad48cbc25f78f475d"
      },
      {
        "fullName": true,
        "address": true,
        "phone": true,
        "roomId": "63c7a9ea00595faf24977074",
        "name": "尾牙抽獎",
        "active": true,
        "category": 3,
        "options": [],
        "id": "63c8f765a111b46da965c1e6"
      }],
      currentPage: 0,
    };
  },
  methods: {
    jumpToMain: function () {
      window.location.href = '/';
    },
    jumpToLogin: function () {
      window.location.href = '/login';
    },
    getRoomName() {
      axios.get(`${Global.backend}/room/${this.roomId}`)
        .then((res) => {
          this.roomInfo = res.data;
        })
        .catch((err) => {
          alert('無法獲取房間資訊...，詳情請查看console');
          console.log(err);
        })
    },
    getEvent() {
      axios.get(`${Global.backend}/event/`)
        .then((res) => {
          this.events = [];
          console.log(res);
          console.log(this.roomInfo.id);
          for (let i of res.data) {
            if (i.roomId === this.roomInfo.id) {
              this.events.push(i);
            }
          }
          console.log(this.events);
        })
        .catch((err) => {
          alert('房間資料讀取失敗...');
          console.log(err);
        })
    }
  },
  mounted() {
    this.getRoomName();
    this.getEvent()
  },
  components: { Thought, Vote, Raffle },
};
</script>

<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />
  <div id="page">
    <nav>
      <span class="material-symbols-outlined">
        <button class="btn" @click="jumpToMain()">home</button>
      </span>
      <div id="band">Welcome to {{ roomInfo.name }}</div>
      <span class="material-symbols-outlined">
        <button class="btn" @click="jumpToLogin()">logout</button>
      </span>
    </nav>
    <div id="middle">
      <div id="sheet" style="overflow-y: scroll; height: 100%;">

        <template v-for="(event, index) in events" :key="index">
          <div v-show="currentPage === index" class="">
            <div class="d-flex justify-content-center mt-4 mb-2">
              <h4 class="font-weight-bold">
                <button @click="currentPage == 0 ? '' : currentPage--" class="btn btn-secondary">▲</button>
                {{ event.name }}
                <button @click="currentPage == events.length - 1 ? '' : currentPage++"
                  class="btn btn-secondary">▼</button>
              </h4>
            </div>
            <div class="mx-5">
              <template v-if="event.category === 1">
                <Vote :eventId="event.id" />
              </template>
              <template v-else-if="event.category === 2">
                <Thought :eventId="event.id" />
              </template>
              <template v-else-if="event.category === 3">
                <Raffle :eventId="event.id" />
              </template>
              <template v-else>
                <p>undefined category</p>
              </template>
              <!-- TODO: add different event components -->
            </div>
          </div>
        </template>
      </div>
      <img id="logo" src="../../../assets/GShepherd_Logo.png" />
    </div>
  </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');

#sheet {
  width: 65vw;
  height: 75vh;
  background-color: rgba(175, 179, 174, 0.6);
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

nav #band {
  font-family: 'Noto Sans TC', sans-serif;
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

.myfont {
  font-family: 'Noto Sans TC', sans-serif;
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
