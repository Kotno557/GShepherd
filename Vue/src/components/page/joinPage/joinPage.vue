<script>
    export default { 
        data(){
            return {
               roomId: this.$route.params.id,
               participantName: ""
            }
        },
        methods: {
            jumpToMain: function(){
                window.location.href='/Gshepherd/';
            },
            jumpToDashbord: function(){
                window.location.href='/Gshepherd/login';
            },
            getParticipantName: function(){
                console.log('test');
                this.participantName="temp_name";
            }
        },
        beforeMount(){
            this.getParticipantName()
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
            <div id="band">${Room name} and \ ID: {{roomId}}</div>
            <span class="material-symbols-outlined">
                <button class="btn" @click="jumpToDashbord()">person</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                the activate site
            </div>
            <img id="logo" src="../../../assets/GShepherd Logo.png" />
            <div id="cheetBar">
                <p><small>這是一個展示用的控制台，實際成品不會有此區塊.</small></p>
                <label for="cars">選擇活動：</label>
                <select>
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
                題目名稱：<input type="text" size=13/>
                <br><br>
                是否已登入? <input type="checkbox" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
#sheet{
    width: 40vw;
    height: 60vh;
    background-color: rgba(175, 179, 174,0.6);
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
span{
    margin-left: 10vw;
    margin-right: 10vw;
}
.btn{
    font-size: 4vmin;
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
</style>