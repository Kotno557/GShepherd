<script>
    export default{
        methods: {
            jumpDashboard: function(){
                let v = `dashboard/getUsername_temp`;
                window.location.href = v;
            }
        }
    }
</script>

<template>
    <div>
        <div>
            Username:<br>
            <input type="text" class="form-control" id="exampleInputUsername" placeholder="Enter username">
        </div>
        <div>E-mail:<br>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div>Password:<br>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div>
        <div>Password again:<br>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"></div>
        <div class="d-flex align-items-center justify-content-center">
            <button class="btn btn-dark" @click="jumpDashboard()">Submit!</button>
        </div>
    </div>
</template>

<style scoped>
@import url('../../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css');
div{
    margin-bottom: 1.5vmin;
    margin-top: 0.25vmin;
    font-size: 1.8vmin;
}
button{
    margin-top: 1vmin;
    font-size: 1.8vmin;
}
input{
    margin-top: 0.25vmin;
}
.form-control{
    font-size: 1.5vmin;
}
</style>