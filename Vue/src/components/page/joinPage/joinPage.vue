<script setup>
import vote from './vote.vue';
import think from './think.vue';
import test from './test.vue';
import rate from './rate.vue';
import discuss from './discuss.vue';
import compare from './compare.vue';
import lotto from './lotto.vue';
import scratch from './scratch.vue';
import date from './date.vue';
import axios from 'axios';
import Global from '../../../Global.js';
</script>
<script>
export default {
    data() {
        return {
            roomId: this.$route.params.id,
            roomName: '',
            events: [
                {
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
                }
            ],
            pointer: -1
        }
    },
    methods: {
        jumpToMain: function () {
            window.location.href = '/';
        },
        jumpToDashbord: function () {
            window.location.href = '/login';
        },
        getRoomName() {
            axios.get(`${Global.backend}/room/${this.roomId}`)
                .then((res) => {
                    this.roomName = res.data.name;
                    console.log(res);
                })
                .catch((err) => {
                    alert('房間名稱讀取錯誤，請稍後再試...');
                    console.log(err);
                });
        },
        getEvents() {
            axios.get(`${Global.backend}/event/`)
                .then((res) => {
                    this.events = [];
                    for (let item of res.data) {
                        if (this.roomId === item.roomId) {
                            this.events.push(item);
                        }
                    }
                    console.log('Fielter event: ', this.events);
                })
                .catch((err) => {
                    console.log(err);
                    alert('活動資料擷取失敗請稍後再試...');
                });
        }
    },
    mounted() {
        this.getRoomName();
        this.getEvents();
    }
}
</script>
<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />

    <div id="page">
        <nav>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToMain()">home</button>
            </span>
            <dev id="band"> {{ roomName }} </dev>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToDashbord()">person</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                {{ pointer }}
                <select class="form-select form-select-lg" aria-label=".form-select-lg example" v-model="pointer">
                    <option value="-1" disabled selected>請選擇一個活動😀</option>
                    <option v-for="(item, index) in events" :value="index">{{ item.name }}</option>
                </select>
                <span v-if="pointer < 0"></span>
                <vote v-else-if="events[pointer].category === 1" :roomTopic="events[pointer].name" :id="events[pointer].id" />
                <think v-else-if="events[pointer].category === 2" :roomTopic="events[pointer]" />
                <lotto v-else-if="events[pointer].category === 3" :roomTopic="events[pointer]" />
            </div>
            <img id="logo" src="../../../assets/GShepherd_Logo.png" />
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');

#sheet {
    width: 60vw;
    height: 70vh;
    background-color: rgba(175, 179, 174, 0.6);
    border-radius: 2vmin;
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

span {
    margin-left: 10vw;
    margin-right: 10vw;
}

.btn {
    font-size: 4vmin;
}

nav #band {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 4vmin;
}

#page {
    width: 100vm;
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
</style>