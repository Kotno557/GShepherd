<script>
import axios from 'axios';
import Global from '../../../Global.js';
export default {
    data() {
        return {
            userId: this.$route.params.id,
            newRoomName: '',
            deleteRoomName: '',
            rooms: [
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
                },
                {
                    "name": "期末尾牙大會",
                    "code": "MC44Mz",
                    "admins": [
                        "63bae430f215b7bd0492d167"
                    ],
                    "createdBy": "63bae430f215b7bd0492d167",
                    "createdAt": "2023-01-18T08:12:26.595Z",
                    "updatedAt": "2023-01-18T08:12:26.595Z",
                    "id": "63c7a9ea00595faf24977074"
                }
            ],
        };
    },
    methods: {
        jumpToMain() {
            window.location.href = '/';
        },
        jumpToLogin() {
            window.location.href = '/login';
        },
        newRoom(roomName) {
            axios
                .post(`${Global.backend}/room/`, {
                    name: roomName
                })
                .catch((err) => {
                    console.log(err);
                    alert('加入房間失敗，請再試一次...');
                })
                .then((res) => {
                    console.log(res);
                    this.getRooms();
                });
            console.log("Post Data: ", {
                name: roomName
            })
        },
        getRooms() {
            axios
                .get(`${Global.backend}/room/`)
                .then((res) => {
                    console.log(res);
                    console.log(this.rooms)
                    this.rooms = [];
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].admins.includes(this.userId)) {
                            this.rooms.push(res.data[i]);
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            console.log(this.rooms, 'there is all rooms...')
        },
        deleteRoom(id) {
            axios.delete(`${Global.backend}/room/${id}`)
                .then((res) => {
                    console.log(res);
                    this.getRooms();
                })
                .catch((err) => {
                    alert('刪除錯誤，請重新再試一次...');
                    console.log(err);
                })
        }
    },
    mounted() {
        this.getRooms();
    },
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
            <div id="band">Hello! {{ this.userId }}</div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToLogin()">logout</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                <div id="name_and_add" class="mt-3 mx-4 myfont" style="font-size: 2vmin">
                    <text style="font-size: 3vmin">以下為您的所有房間：</text>
                    <button style="float: right" class="mx-1 btn btn-dark" data-bs-toggle="modal"
                        data-bs-target="#createModal" @click="newRoomName = ''">
                        + 新增房間
                    </button>
                    <button style="float: right" class="btn btn-dark" data-bs-toggle="modal"
                        data-bs-target="#deleteModal">
                        - 刪除房間
                    </button>
                </div>
                <div style="
            text-align: left;
            max-height: max-content;
            height: 65vh;
            margin-left: vmin;
          " class="m-3 overflow-auto">
                    <ul class="list-group myfont gray-hover" style="width: 98%; font-size: 3vmin">
                        <a class="list-group-item" v-for="item in this.rooms"
                            :href="`/dashboard/${this.userId}/${item.id}`">
                            <span class="material-symbols-outlined"> event </span>
                            {{ item.name }}
                            <small style="color: rgb(102, 98, 98, 0.5); font-size: medium">#{{ item.id }}</small>
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
                        <h4 class="modal-title">加入房間</h4>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">請輸入房間名稱:</label>
                        <input type="text" class="form-control" id="recipient-name" v-model="newRoomName" />
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            :disabled="newRoomName === ''" @click="newRoom(newRoomName)">
                            確認
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            關閉
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteModal" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">刪除房間</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <label for="recipient-name" class="col-form-label">請選擇要刪除的房間名稱:</label>
                        <select class="form-select" aria-label="Default select example" v-model="deleteRoomName">
                            <option selected value="">請選擇一個房間...</option>
                            <option v-for="(item, index) in rooms" :key="index" :value="item.id">{{ item.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            :disabled="deleteRoomName === ''" @click="deleteRoom(deleteRoomName)">
                            確認
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                            關閉
                        </button>
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
