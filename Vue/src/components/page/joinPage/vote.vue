<script>
import axios from 'axios';
import Global from '../../../Global.js';

export default {
    props: {
        roomTopic: String,
        id: String,
    },
    data() {
        return {
            awnser: '',
            lock: false,
            options: [
                "圓山",
                "凱薩",
                "長榮"
            ]
        }
    },
    methods: {
        submit() {
            axios.post(`${Global.backend}/record`, {
                eventId: this.id,
                userId: this.id,
                option: this.awnser
            })
                .then((res) => {
                    alert('投票成功');
                    this.lock = true;
                    console.log(res)
                })
                .catch((err) => {
                    alert('投票失敗，請稍後再試...')
                    console.log(err);
                })
        },
        getSelection() {
            axios.get(`${Global.backend}/event/${this.id}`)
                .then((res) => {
                    this.options = res.data.options;
                    console.log('Get options: ', this.options);
                })
                .catch((err) => {
                    alert('無法取得選項資料，請稍後再試...');
                    console.log(err);
                })
        }
    },
    mounted() {
        console.log('Datas: ', this.$props)
        this.getSelection();
    }
}
</script>

<template>
    <div id="safe">
        <div class="myfont mb-5" style="jusfy-content: center;">
            <h4>{{ roomTopic }}</h4>
            <div style="text-align: left; max-height: 45vh;" class="mt-1 mb-3 overflow-auto" v-if="!lock">
                <ul class="list-group myfont" style="width: 35vw;">
                    <li class="list-group-item" v-for="item in options">
                        <input class="form-check-input me-4" type="radio" name="exampleRadios" id="exampleRadios1"
                            @click="awnser = item">
                        <label class="form-check-label" for="exampleRadios1">
                            {{ item }}
                        </label>
                    </li>
                </ul>
            </div>
            <div style="text-align: center; max-height: 45vh;" class="mt-1 mb-3 overflow-auto" v-else>
                <h5>已提交{{ roomTopic }}活動資料！</h5>
            </div>
            <button class="btn btn-dark" @click="submit()" v-if="!lock" :disabled="awnser==''">繳交</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');

h4 {
    font-size: 3.5vmin;
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
    font-family: 'Noto Sans TC', sans-serif;
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