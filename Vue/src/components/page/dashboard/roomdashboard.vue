<script>
    export default { 
        data(){
            return {
                userId: this.$route.params.id,
                roomid: this.$route.params.roomId,
                poll:
                [
                    {
                        type: 'forms_add_on'
                    }
                ]
            }
        },
        methods:{
            jumpToBack: function(){
                window.location.href=`/Gshepherd/dashboard/${this.userId}`;
            },
            jumpToLogin: function(){
                window.location.href='/Gshepherd/login';
            }
        }
    }
</script>

<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..300,0..1,-50..200" />

    <div id="page">
        <nav>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToBack()">arrow_back</button>
            </span>
            <div id="band">#{{this.roomid}} </div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToLogin()">logout</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet" class="flex-center">
                <div id="section1">
                    <ul class="list-group myfont" style="width: 100%; font-size: 2vmin">
                        <li class="list-group-item active flex-center" style="justify-content: space-between">
                            <text>List：</text>
                            <button style="float: right;" class="btn btn-dark ">+ 新增活動</button>
                        </li>
                        <li class="list-group-item" v-for="i in this.poll">
                            <span class="material-symbols-outlined">
                                {{i.type}}
                            </span>
                        </li>
                    </ul>
                </div>
                <div id="section2">Live</div>
            </div>
            <img id="logo" src="../../../assets/GShepherd Logo.png" />
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

.list-group-item.active{
    z-index: 2;
    color: var(--bs-list-group-active-color);
    background-color: rgb(122, 122, 122);
    border-color: rgb(205, 207, 204);
}
nav #band{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 2vmin; 
}
#page{
    width: 100vm;
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




#section1{
    background-color: aqua;
    border-radius: 2vmin 0 0 2vmin;
    height: 95%;
    width: 45%;
    max-height: max-content;
    overflow: auto;
}
#section2{
    background-color: aquamarine;
    border-radius: 0 2vmin 2vmin 0;
    height: 95%;
    width: 45%;
}
.myfont{
    font-family: 'Noto Sans TC', sans-serif;
}
.flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
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