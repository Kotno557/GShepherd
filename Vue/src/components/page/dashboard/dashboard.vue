<script>
    export default { 
        data(){
            return {
               userId: this.$route.params.id,
            }
        },
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
                <button class="btn" @click="jumpToDashbord()">logout</button>
            </span>
        </nav>
        <div id="middle">
            <div id="sheet">
                <div id="name_and_add" class="mt-3 mx-4">
                    <text>活動：</text>
                    <button style="float: right">+ 新增活動</button>
                </div>
                <div style="text-align: left; max-height: max-content;height: 65vh; margin-left: vmin;" class="m-3 overflow-auto">
                    <ul class="list-group myfont" style="width: 98%;">
                        <li class="list-group-item">
                            123456
                        </li>
                    </ul>
                </div>
            </div>
            <img id="logo" src="../../../assets/GShepherd Logo.png" />
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
#sheet{
    width: 80vw;
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
.myfont{
    font-size: 5vmin;
    font-family: 'Noto Sans TC', sans-serif;
}
</style>