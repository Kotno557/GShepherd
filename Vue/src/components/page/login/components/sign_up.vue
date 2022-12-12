<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordAgain: "",
      //假設資料庫目前有以下的使用者資料
      userData: [
        {
          id: "356a192b7913b04c54574d18c28d46e6395428ab",
          email: "david@example.com",
          password: "mypassword001",
        },
        {
          id: "da4b9237bacccdf19c0760cab7aec4a8359010b0",
          email: "niz@example.com",
          password: "password2",
        },
        {
          id: "77de68daecd823babbb58edb1c8e14d7106e83bb",
          email: "jack@example.com",
          password: "jackpassword",
        },
        {
          id: "1b6453892473a467d07372d45eb05abc2031647a",
          email: "maria@example.com",
          password: "mariapassword",
        },
        {
          id: "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4",
          email: "deniel@example.com",
          password: "deniel_password",
        },
      ],
    };
  },
  methods: {
    jumpDashboard: function () {
      let v = `/dashboard/getUsername_temp`;
      window.location.href = v;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <div class="alert alert-danger" role="alert">
        {{ "請確認資料正確後再送出" }}
      </div>
    </div>
    <div>
      E-mail:<br />
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <span class="badge bg-danger text-wrap">E-mail格式錯誤!</span>
    </div>
    <div>
      Password:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="長度至少為8個字元的字串"
      />
      <div class="m-0">
        密碼強度: <span class="badge bg-danger text-wrap">不符規定!</span>
      </div>
      密碼格式錯誤!
    </div>

    <div>
      Password again:<br />
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        placeholder="請輸入相同密碼"
      />密碼不一致
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <button class="btn btn-dark" @click="jumpDashboard()">Submit!</button>
    </div>
  </div>
</template>

<style scoped>
@import url("../../../../../public/bootstrap-5.2.2/bootstrap-5.2.2-dist/css/bootstrap.css");
div {
  margin-bottom: 1vmin;
  margin-top: 0.25vmin;
  font-size: 1.8vmin;
}
button {
  margin-top: 1vmin;
  font-size: 1.5vmin;
}
input {
  margin-top: 0.25vmin;
}
.form-control {
  font-size: 2vmin;
}
</style>
