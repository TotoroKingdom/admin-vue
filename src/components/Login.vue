<template>

  <div class="login_container">
   <div class="box">
        <h2>Login</h2>
        <div class="input-box">
            <label>账号</label>
            <input type="text"/>
        </div>
        <div class="input-box">
            <label>密码</label>
            <input type="password"/>
        </div>
        <div class="btn-box">
            <a href="#">忘记密码?</a>
            <div>
                <button>登录</button>
                <button>注册</button>
            </div>
        </div>
    </div>

   
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_container {
  background-image: url(../assets/image/login.jpg);
  background-size: 100% 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  
}


</style>
