<script>
    export default { 
        data(){
            return {
                userId: this.$route.params.id,
                event:
                [
                    {
                        name: "活動一",
                        roomId: '265844'
                    },
                    {
                        name: "活動二",
                        roomId: '155940'
                    },
                    {
                        name: "活動三",
                        roomId: '118721'
                    },
                    {
                        name: "活動四",
                        roomId: '264687'
                    },
                    {
                        name: "活動五",
                        roomId: '264256'
                    },
                    {
                        name: "活動六",
                        roomId: '964256'
                    },
                    {
                        name: "活動七",
                        roomId: '984255'
                    },
                    {
                        name: "活動八",
                        roomId: '425256'
                    },
                    {
                        name: "活動九",
                        roomId: '525256'
                    },
                    {
                        name: "活動十",
                        roomId: '252566'
                    },
                    {
                        name: "活動十一",
                        roomId: '981256'
                    },
                    {
                        name: "活動十二",
                        roomId: '981256'
                    }
                ],
            }
        },
        methods:{
            jumpToMain: function(){
                window.location.href='/';
            },
            jumpToLogin: function(){
                window.location.href='/login';
            }
        }
    }
</script>

<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />

    <div id="page">
        <nav>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToMain()">home</button>
            </span>
            <div id="band">Hello! {{this.userId}} </div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToLogin()">logout</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                <div id="name_and_add" class="mt-3 mx-4 myfont" style="font-size: 2vmin;">
                    <text style="font-size: 3vmin">活動：</text>
                    <button style="float: right;" class="mx-4 btn btn-dark ">+ 新增活動</button>
                </div>
                <div style="text-align: left; max-height: max-content;height: 65vh; margin-left: vmin;" class="m-3 overflow-auto">
                    <ul class="list-group myfont gray-hover" style="width: 98%; font-size: 3vmin">
                        <a class="list-group-item" v-for="i in this.event" :href="`/dashboard/${this.userId}/${i.roomId}`">
                            <span class="material-symbols-outlined" >
                                event
                            </span>
                            {{i.name}}
                            <small style="color:rgb(102,98,98, 0.5); font-size: medium;">#{{i.roomId}}</small>
                        </a>
                    </ul>
                </div>
            </div>
            <img id="logo" src="../../../assets/GShepherd_Logo.png" />
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
#sheet{
    width: 65vw;
    height: 75vh;
    background-color: rgba(175, 179, 174,0.6);
    border-radius: 2vmin;
    max-height: fit-content;
}
#logo{
    height: 8vh;
    width: fit-content;
    position: absolute;
    bottom: 0;
}
#cheetBar{
    background-color: rgba(205, 207, 204,0.6);
    position: absolute;
    bottom: 5vmin;
    left: 2vmin;
    border: 1px black solid;
    height: 200px;
    width: 200px;
}
nav{
    width: 100vm;
    height: 10vh;
    background-color: #d0d4cf;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav span{
    margin-left: 10vw;
    margin-right: 10vw;
}
.material-symbols-outlined .btn{
    font-size: 4vmin;
}
.gray-hover a:hover{
    background-color: rgba(243, 243, 243, 0.74);
}
nav #band{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 4vmin; 
}
#page{
    width: 100vw;
    height: 100vh;
}
#middle{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vm;
    height: 90vh;
    background-image: url(./background.png);
    background-size: cover;
}
#btm{
    width: 100vm;
    height: 10vh;
    border-top: 2px rgba(219, 211, 211, 0.4) solid;
    display: flex;
    align-content: center;    
    justify-content: center;
}
.myfont{
    font-family: 'Noto Sans TC', sans-serif;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); 
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
}
</style>