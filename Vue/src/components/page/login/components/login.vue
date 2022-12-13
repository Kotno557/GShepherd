<script>
export default {
  props: ['emailchecker','userData'],
  data() {
    return {
      email: "",
      password: "",
      emailIsValid: true,
      passwordValid: true,
    };
  },
  methods: {
    submit: function () {
      let emailchecker=this.$parent.$options.methods.emailchecker;
      let userData=this.$parent.$options.data().userData;
      this.emailIsValid = emailchecker(this.email);
      this.passwordValid = this.passwordchecker(this.password);
      if(this.emailIsValid && this.passwordValid){
        location.href = `/dashboard/${userData.find(o => o.email==this.email).id}`;
      }
    },
    passwordchecker: function () {
      let userData=this.$parent.$options.data().userData;
      let userIndex=userData.findIndex(o=>o.email===this.email);
      if(userIndex==-1) return false;
      else{
        return this.password==userData[userIndex].password;
      }
    },
  }
};
</script>

<template>
  <div>
    <div>
      <div
        v-if="emailIsValid == false || passwordValid == false"
        class="alert alert-danger"
        role="alert"
      >
        {{ emailIsValid == false ? "信箱格式錯誤" : "密碼錯誤，或帳戶不存在" }}
      </div>
    </div>
    <div>
      E-mail:<br />
      <input
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div>
      Password:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
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
