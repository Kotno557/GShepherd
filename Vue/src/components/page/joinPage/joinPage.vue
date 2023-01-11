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
</script>
<script>
export default {
    data() {
        return {
            all_event: null,
            roomType: 1
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
        }
    },
    beforeMount() {
        this.getParticipantName()
    },
    mounted() {
        // axios.get('http://139.162.39.223/api/event')
        //     .then(response => {
        //         var flag = response.status === 200;
        //         console.log(response);
        //         this.valid = flag;
        //         if (flag) {
        //             this.all_event = response.data;
        //         }
        //     });
        this.all_event = {
            "options": [
			"a",
			"b",
			"c",
			"d"
		],
		"roomId": "63badf188b1be06bd2358e1d",
		"name": "test1",
		"active": true,
		"category": 1,
		"id": "63be7296b7d716268b179fdb"
        }
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
            <div id="band">${Room name} and \ ID: {{ roomId }}</div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToDashbord()">person</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                <vote v-if="roomType === 0" :roomTopic=sRroomTopic />
                <think v-if="roomType === 1" :roomTopic=sRroomTopic />
                <test v-if="roomType === 2" :roomTopic=sRroomTopic />
                <rate v-if="roomType === 3" :roomTopic=sRroomTopic />
                <discuss v-if="roomType === 4" :roomTopic=sRroomTopic />
                <compare v-if="roomType === 5" :roomTopic=sRroomTopic />
                <lotto v-if="roomType === 6" :roomTopic=sRroomTopic />
                <scratch v-if="roomType === 7" :roomTopic=sRroomTopic />
                <date v-if="roomType === 8" :roomTopic=sRroomTopic />
            </div>
            <img id="logo" src="../../../assets/GShepherd_Logo.png" />
            <div id="cheetBar">
                <p><small>這是一個展示用的控制台，實際成品不會有此區塊.</small></p>
                <label for="cars">選擇活動：</label>
                <select id="activate">
                    <option>投投票</option>
                    <option>想想看</option>
                    <option>測測驗</option>
                    <option>評評分</option>
                    <option>討討論</option>
                    <option>比比看</option>
                    <option>抽抽獎</option>
                    <option>刮刮樂</option>
                    <option>選選日</option>
                </select>
                <br><br>
                題目名稱：<input id="topicName" type="text" style="width: 10vmin;" />
                <br><br>
                是否已登入? <input type="checkbox" />
                　<input type="button" value="OK" @click="setValue()" />
            </div>
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
    font-size: 2vmin;
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