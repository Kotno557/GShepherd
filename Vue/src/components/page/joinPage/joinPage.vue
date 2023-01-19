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
            roomid: this.$route.params.id,
            roomName: '新春尾牙大會',
            participantName: "",
            all_event: [{
                "options": [
                    "春雞",
                    "烤鴨",
                    "乳豬",
                    "羊腿"
                ],
                "roomId": "63b9823dedd082accf34c947",
                "name": "新春尾牙投票",
                "active": true,
                "category": 1,
                "id": "63bf06506484d41e59995282"
            },
            {
                "options": [],
                "roomId": "63b9823dedd082accf34c947",
                "name": "下次聚餐地點",
                "active": true,
                "category": 2,
                "id": "63bf083b6484d41e5999528d"
            },
            {
                "category": 3,
                "roomId": "63b9823dedd082accf34c947",
                "name": "尾牙大獎",
                "phone": true,
                "party_name": true,
                "address": true
            }],
            view_now: -1
        }
    },
    methods: {
        jumpToMain: function () {
            window.location.href = '/';
        },
        jumpToDashbord: function () {
            window.location.href = '/login';
        },
        getParticipantName: function () {
            console.log('test');
            this.participantName = "temp_name";
        },
        setValue: function () {
            this.roomType = this.arr[document.getElementById('activate').value];
            console.log(this.roomType);
            this.sRroomTopic = document.getElementById('topicName').value;
            document.getElementById('topicName').value = "";
        },
        mytest() {
            console.log(this.roomName);
        }
    },
    beforeMount() {
        this.getParticipantName()
    },
    mounted() {
        axios.get(`${Global.backend}/api/event`)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (this.roomid === response.data[i].roomId) {
                            this.all_event.push(response.data[i]);
                        }
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(`${Global.backend}/api/room/${this.roomid}`)
            .then(response => {
                console.log(response);
                if (response.status === 200 && response.data !== "") {
                    this.roomName = response.data.name;
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(this.all_event)
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
                <select class="form-select form-select-lg" aria-label=".form-select-lg example" v-model="view_now">
                    <option value="-1" disabled selected>請選擇一個活動😀</option>
                    <option v-for="(item, index) in all_event" :value="index">{{ item.name }}</option>
                </select>
                <span v-if="view_now < 0"></span>
                <vote v-else-if="all_event[view_now].category === 1" :roomTopic=all_event[view_now] />
                <think v-else-if="all_event[view_now].category === 2" :roomTopic=all_event[view_now] />
                <lotto v-else-if="all_event[view_now].category === 3" :roomTopic=all_event[view_now] />
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