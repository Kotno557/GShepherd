<script>
    export default{
        data(){
            return{
                submit: false
            }
        }
    }
</script>

<template>
    <div id="safe">
        <div class="myfont" style="jusfy-content: center;">
            <h4>提交抽獎基本資料</h4>
            <div style="text-align: center; max-height: 45vh;" class="mt-3 mb-3 overflow-auto" v-if="submit===false">
                <ul class="list-group myfont" style="width: 35vw;">
                    <li class="list-group-item">
                        <input class="form-control" type="text" placeholder="輸入中獎人真實姓名：">
                    </li>
                    <li class="list-group-item">
                        <input class="form-control" type="text" placeholder="寄送獎品地址：">
                    </li>
                    <li class="list-group-item">
                        <input class="form-control" type="text" placeholder="中獎人電話號碼：">
                    </li>
                </ul>
            </div>
            <div style="text-align: center; max-height: 45vh;" class="mt-3 mb-3 overflow-auto" v-else>
                <h5>已提交資料！</h5>
            </div>
            <button class="btn btn-dark mx-2" @click="submit=true" v-if="submit===false">送出</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
h4{
    font-size: 3.5vmin;
}
.form-control{
    border: 0;
}
.bar{
    justify-content: center;
    width: 15vmin;
    border: solid;
}
#safe{
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
#safe div{
    text-align: center;
}
.cheet-bar{
    background-color: rgba(205, 207, 204,0.6);
    position: absolute;
    top: 5vmin;
    left: 2vmin;
    border: 1px black solid;
    height: 200px;
    width: 200px;
}
.myfont{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 2vmin; 
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