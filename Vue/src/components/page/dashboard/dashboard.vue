<script>
import axios from 'axios'
import Global from '../../../Global.vue';
export default {
    data() {
        return {
            userId: this.$route.params.id,
            room_name: "",
            room: [
                {
                    "name": "test",
                    "code": "MC4yNj",
                    "admins": [
                        "63babf42102799dada53bc11"
                    ],
                    "createdBy": "63babf42102799dada53bc11",
                    "createdAt": "2023-01-08T15:16:01.346Z",
                    "updatedAt": "2023-01-08T15:16:01.346Z",
                    "id": "63bade318b1be06bd2358e0b"
                }
            ]
        }
    },
    methods: {
        jumpToMain: function () {
            window.location.href = '/';
        },
        jumpToLogin: function () {
            window.location.href = '/login';
        },
        new_room: function (newname) {
            axios.post(`${Global.backend}/room/`, {
                admins: [this.userId],
                createdBy: new Date().toISOString(),
                name: newname
            })
                .then(response => {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.GetAllRoom();
        },
        GetAllRoom() {
            axios.get(`${Global.backend}/room/`)
                .then(response => (this.room = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.GetAllRoom();
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
            <div id="band">Hello! {{ this.userId }} </div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToLogin()">logout</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                <div id="name_and_add" class="mt-3 mx-4 myfont" style="font-size: 2vmin;">
                    <text style="font-size: 3vmin">以下為您的所有房間：</text>
                    <button style="float: right;" class="mx-1 btn btn-dark " data-bs-toggle="modal"
                        data-bs-target="#createModal" @click="room_name = ''">+ 新增房間</button>
                    <button style="float: right;" class=" btn btn-dark " data-bs-toggle="modal"
                        data-bs-target="#deleteModal">- 刪除房間</button>
                </div>
                <div style="text-align: left; max-height: max-content;height: 65vh; margin-left: vmin;"
                    class="m-3 overflow-auto">
                    <ul class="list-group myfont gray-hover" style="width: 98%; font-size: 3vmin">
                        <a class="list-group-item" v-for="item in this.room" :href="`/dashboard/${this.userId}/${item.id}`">
                            <span class="material-symbols-outlined">
                                event
                            </span>
                            {{ item.name }}
                            <small style="color:rgb(102,98,98, 0.5); font-size: medium;">#{{ item.id }}</small>
                        </a>
                    </ul>
                </div>
            </div>
            <img id="logo" src="../../../assets/GShepherd_Logo.png" />
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
                        <label for="recipient-name" class="col-form-label">請輸入活動名稱:</label>
                        <input type="text" class="form-control" id="recipient-name" v-model="room_name">
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" :disabled="room_name === ''"
                            @click="new_room(room_name)">確認</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">關閉</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteModal" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">開發中，敬請期待...</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">

                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');

#sheet {
    width: 65vw;
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
