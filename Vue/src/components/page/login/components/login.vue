<script>
import axios from 'axios';

export default {
  props: ['emailchecker', 'userData'],
  data() {
    return {
      email: "",
      password: "",
      valid: true
    };
  },
  methods: {
    submit: function () {
      axios.post('http://139.162.39.223:3000/auth/login', {
        username: this.email,
        password: this.password
      }, { withCredentials: true })
        .then(response => {
          var flag = response.status == 200;
          console.log(response);
          this.valid = flag;
          if (flag) {
            location.href = `/dashboard/${response.data.msg}`;
          }
        })
        .catch(error => {
          console.log(error);
          this.valid = false;
        });
    }
  }
};
</script>

<template>
  <div>
    <div>
      <div v-if="!valid" class="alert alert-danger" role="alert">
        {{ "帳號密碼錯誤或帳戶不存在" }}
      </div>
    </div>
    <div>
      E-mail or Username:<br />
      <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email or username"
        v-model="email" />
    </div>
    <div>
      Password:<br />
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
        v-model="password" />
    </div>

    <div class="d-flex align-items-center justify-content-center">
      <button class="btn btn-dark" @click="submit()">Submit!</button>
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");

div {
  margin-bottom: 1.5vmin;
  margin-top: 0.25vmin;
  font-size: 2vmin;
}

button {
  margin-top: 2vmin;
  font-size: 1.8vmin;
}

input {
  margin-top: 0.25vmin;
}

.form-control {
  font-size: 2vmin;
}
</style>
