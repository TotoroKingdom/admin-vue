<template>
  <div class="login_container">
    <div class="Playmusic" @click="musicMuted">
      <img src="../assets/image/music.png" />
    </div>
    <div class="mutedmusic" @click="mutedPlay">
      <img src="../assets/image/muted.png" />
    </div>
    <video
      id="OPVideo"
      style="width: 100%; height: 100%; object-fit: cover; z-index: -1"
      autoplay
      loop
      muted
    >
      <source src="../assets/image/GenshinImpact.mp4" type="video/mp4" />
    </video>
    <div class="box">
      <h2>Login</h2>
      <div class="input-box">
        <label>账号</label>
        <input type="text" v-model="userID" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password" v-model="pwd" @keyup.enter="UserLogin()"/>
      </div>
      <div class="btn-box">
        <a href="#">忘记密码?</a>
        <div>
          <button v-text="`登录`" @click="UserLogin"></button>
          <button v-text="`注册`" @click="UserSign"></button>
        </div>
      </div>
    </div>

    <div class="Signbox">
      <h2>Sign</h2>
      <div class="input-box">
        <label>账号</label>
        <input class="Signmail" type="text" v-model="email" placeholder="请输入邮箱" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password" v-model="Signpwd" @keyup.enter="UserRegister()"/>
      </div>
      <div class="btn-box">
        <div>
          <button v-text="`注册`" @click="UserRegister"></button>
          <button v-text="`已有账号直接登陆`" @click="backLogin"></button>
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
      userID: "",
      pwd: "",
      email: "",
      Loginpwd: "",
      Signpwd:''
    };
  },
  mounted() {
   

  },
  methods: {
    /* 注册 */
    UserRegister(){
      const url = '/register/email'
      let _this = this
      let params  = {
        email:_this.email,
        password:_this.Signpwd
      }
      return new Promise((resolve, reject) => {
        _this.$UserData.Register(url,params).then((res)=>{
          _this.$message({
            message:'邮件发送成功',
            type:'success'
          })
          resolve()
        }).catch((err)=>{
          reject(err)
        })
      })
    },
    /* 静音 */
    musicMuted() {
      let musicdom = document.querySelector(".Playmusic");
      let muteddom = document.querySelector(".mutedmusic");
      let vide = document.getElementById("OPVideo");
      musicdom.style.display = "none";
      muteddom.style.display = "block";
      vide.muted = true;
    },
    /* 播放 */
    mutedPlay() {
      let musicdom = document.querySelector(".Playmusic");
      let muteddom = document.querySelector(".mutedmusic");
      let vide = document.getElementById("OPVideo");
      musicdom.style.display = "block";
      muteddom.style.display = "none";
      vide.muted = false;
    },
    UserLogin() {
      let _this = this;
      if (!!(_this.userID && _this.pwd)) {
        _this.getUserinfo();
      } else {
        
        _this.$message({
          message: "请输入账号或密码",
          type: "error",
        });
      }
    },
    UserSign() {
      let Signdom = document.querySelector(".Signbox");
      let Logindom = document.querySelector(".box");
      Signdom.style.transform = "rotateY(0deg)";
      Logindom.style.transform = "rotateY(180deg)";
    },
    backLogin() {
      let Signdom = document.querySelector(".Signbox");
      let Logindom = document.querySelector(".box");
      Signdom.style.transform = "rotateY(-180deg)";
      Logindom.style.transform = "rotateY(0deg)";
      _this.UserSign = '';
      _this.Signpwd ='';
    },
    getUserinfo() {
      let _this = this;
      // const url = "/apis/login";
      const url = "/login";

      let params = {
        username: _this.userID,
        password: _this.pwd,
      };
      return new Promise((resolve, reject) => {
        _this.$UserData
          .Userbaseinfo(url, params)
          .then((res) => {
            if (res) {
              sessionStorage.setItem("token", res.msg);
              this.$router.push("/main");
            }
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mutedmusic {
  position: fixed;
  top: 30px;
  left: 38px;
}
.Playmusic {
  position: fixed;
  display: none;
  top: 30px;
  left: 38px;
}
.login_container {
  /* background-image: url(../assets/image/login.jpg);
  background-size: 100% 100%; */
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.box {
  position: absolute;
  z-index: 1;
  backface-visibility: hidden;
  transition: all 0.5s;
}
.Signbox {
  position: absolute;
  z-index: 0;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: all 0.5s;
}
.Signbox .input-box .Signmail::-webkit-input-placeholder{
  color:whitesmoke
}
</style>
