<script>
    export default{
        props: ['roomTopic'],
        data(){
            return{
                question: 
                [
                    {name: '蘋果', rank: 1},
                    {name: '香蕉', rank: 2},
                    {name: '橘子', rank: 3},
                    {name: '番茄', rank: 4},
                    {name: '奇異果', rank: 5}
                ]
            }
        },
        methods:{
            swap: function(a,b){
                if(b>=0 && b<this.question.length){
                    let temp=this.question[a];
                    this.question[a]=this.question[b];
                    this.question[b]=temp;
                }
            }
        }
    }
</script>

<template>
    <div class="cheet-bar">
        <small>Cheet Board</small><br>
    </div>
    <div id="safe">
        <div class="myfont">
            <h4>{{roomTopic===""?"你喜歡的水果排名：":roomTopic}}</h4>
            <p class="face">😍</p>
            <div style="max-height: 45vh;" class="overflow-auto">
                <ul class="list-group myfont" style="width: 35vw;">
                    <li class="list-group-item" v-for="(item, index) in question" style="display:flex; justify-content: space-between;">
                        <input type="button" @click="swap(index,index-1)" class="btn btn-outline-secondary rank" value="▲">
                        <span>{{item.name}}</span>
                        <input type="button" @click="swap(index,index+1)" class="btn btn-outline-secondary rank" value="▼">
                    </li>
                </ul>
            </div>

            <p class="face">😱</p>
            <button class="btn btn-dark mt-3" @click="">繳交</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
.rank{
    width: 1.5rem;
    height: 1.5rem;
}
.list-group-item .btn{
    --bs-btn-padding-x: 0rem;
    --bs-btn-padding-y: 0rem;
}
.face{
    font-size: 1.75rem;
    margin-bottom: 0%;
    margin-top: 0%;
}
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