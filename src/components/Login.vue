<template>

  <div class="login_container">
   <div class="box">
        <h2>Login</h2>
        <div class="input-box">
            <label>账号</label>
            <input type="text" v-model="userID"/>
        </div>
        <div class="input-box">
            <label>密码</label>
            <input type="password" v-model="pwd"/>
        </div>
        <div class="btn-box">
            <a href="#">忘记密码?</a>
            <div>
                <button  v-text="`登录`"  @click="UserLogin"></button>
                <button  v-text="`注册`" @click="UserSign"></button>
            </div>
        </div>
    </div>

    <div class="Signbox">
        <h2>Sign</h2>
        <div class="input-box">
            <label>账号</label>
            <input type="text" v-model="userID"/>
        </div>
        <div class="input-box">
            <label>密码</label>
            <input type="password" v-model="pwd"/>
        </div>
        <div class="btn-box">
            
            <div>
                <button  v-text="`注册`"  @click="UserLogin"></button>
                <button  v-text="`已有账号直接登陆`" @click="backLogin"></button>
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
      userID:'',
      pwd:''
    };
  },
  
  methods:{
    UserLogin(){
      // this.$router.push('/main')
      this.getUserinfo()
     
    },
    UserSign(){
      let Signdom = document.querySelector('.Signbox')
      let Logindom =document.querySelector('.box')
      Signdom.style.transform = "rotateY(0deg)"
      Logindom.style.transform = "rotateY(180deg)"
    },
    backLogin(){
      let Signdom = document.querySelector('.Signbox')
      let Logindom =document.querySelector('.box')
      Signdom.style.transform = "rotateY(-180deg)"
      Logindom.style.transform = "rotateY(0deg)"
    },
    getUserinfo(){
      let _this = this
      const url = _this.$root.api
      
      let params = {
        db:999,
        output_type: 2,
        numres: 3,
        api_key:"a5d6656276b8b837c4cf1ec14e5554788ea548e3",
        url:"https%3A%2F%2Fc2cpicdw.qpic.cn%2Foffpic_new%2F765830637%2F%2F765830637-2654397626-8CE31237DFAF3D516C2435C66D3A43F5%2F0%3Fterm%3D2"
      }
      return new Promise((resolve, reject) => {
      _this.$UserData.Userbaseinfo(url,params).then((res)=>{
        console.log('@@@@',res)
        resolve()
      }).catch((err)=>{
        reject(err)
      })
      })
    }
  }
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

.box{
  position: absolute;
  z-index: 1;
  backface-visibility: hidden;
  transition: all 0.5s;
}
.Signbox{
  position: absolute;
  z-index:0;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: all 0.5s;
}

</style>
