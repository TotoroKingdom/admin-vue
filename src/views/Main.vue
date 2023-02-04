<template>
  <div class="main">
    <header>
      <div class="headertop">
        <div class="headermain">
          <div class="left">
            <h5>欢迎来到白鹭之家</h5>
          </div>
          <div class="right">
            <!-- <div class="userImg" style="width:50px;height:50px">
              <img src="../assets/image/noPic.png" >
            </div> -->
            <h5 style="float: left">Welcome</h5>
            <ul>
              <li class="userinfoLi">
                <ul class="information">
                  <div style="width: 145px; margin: 0 auto">
                    <li>administrator</li>
                    <li>用户名</li>
                    <li>等级</li>
                    <li>设置</li>
                    <li>登出</li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <div class="slipMain">
        <div class="slipTittle">
          <h1>今日运势</h1>
        </div>
        <div class="slipborder">
          <div class="slip">
            {{todayslip}}
          </div>
        </div>
        <div class="imgs">
          <img src="../assets/image/paimeng.png" />
        </div>
      </div>

      <div class="contentMain">
        <img
          src="../assets/image/star_corner.svg"
          style="
            position: absolute;
            z-index: 3;
            bottom: -1%;
            left: -1%;
            height: 20px;
            width: 20px;
          "
        />
        <img
          src="../assets/image/star_corner.svg"
          style="
            position: absolute;
            z-index: 3;
            top: -1%;
            left: -1%;
            height: 20px;
            width: 20px;
          "
        />
        <img
          src="../assets/image/star_corner.svg"
          style="
            position: absolute;
            z-index: 3;
            top: -1%;
            right: -1%;
            height: 20px;
            width: 20px;
          "
        />
        <img
          src="../assets/image/star_corner.svg"
          style="
            position: absolute;
            z-index: 3;
            bottom: -1%;
            right: -1%;
            height: 20px;
            width: 20px;
          "
        />

        <div style="
            position: absolute;
            overflow: hidden;
            height: 100%;
            width: 100%;
          ">
          <div
            class="round"
            style="top: -40px; right: -40px"
          ></div>
          <div
            class="round"
            style="top: -40px; left: -40px"
          ></div>
          <div
            class="round"
            style="bottom: -40px; right: -40px"
          ></div>
          <div
            class="round"
            style="bottom: -40px; left: -40px"
          ></div>
          <div class="Mainborder"></div>
          <div class="Mainsecond">
            <div class="secondsolid">
              <div
                class="secondRound"
                style="top: -10px; left: -10px"
              ></div>
              <div
                class="secondRound"
                style="top: -10px; right: -10px"
              ></div>
              <div
                class="secondRound"
                style="bottom: -10px; left: -10px"
              ></div>
              <div
                class="secondRound"
                style="bottom: -10px; right: -10px"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="paimeng">
        <img src="../assets/image/yingjishiping.svg" />
      </div>
      <div class="shentong">
        <img src="../assets/image/bg1.png" />
        <img src="../assets/image/bg2.png" />
        <img src="../assets/image/bg3.png" />
        <img src="../assets/image/bg4.png" />
        <img src="../assets/image/bg5.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  name: "Main",
  data() {
    return {
      msg: "Welcome 神里大小姐",
      todayslip: "",
    };
  },
  mounted() {
    let _this = this;
    _this.GetSlip();
  },
  methods: {
    GetSlip() {
      let _this = this;
      // const url = '/apis/today/fortune'
      const url = "/today/fortune";
      let headerparams = sessionStorage.getItem("token");

      return new Promise((resolve, reject) => {
        _this.$UserData
          .getSlip(url, "", headerparams)
          .then((res) => {
            if (res) {
              _this.todayslip = Base64.decode(res.data.content);
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
@media screen and (max-height: 768px) {
  .slipMain {
    transform: scale(0.68);
    margin-top: -40px;
    margin-left: -64px;
  }

  .headermain {
    width: 1100px !important;
  }

  .contentMain {
    transform: scale(0.75);
    margin-top: -42px !important;
    margin-left: 41px !important;
  }
  .shentong {
    transform: scale(0.7);
    margin-right: -13px;
  }
}
.headertop {
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
}
.headermain {
  width: 1600px;
  margin: 0 auto;
  line-height: 60px;
  overflow: hidden;
}
.left {
  float: left;
}
.right {
  float: right;
  margin-top: 5px;
  cursor: pointer;
  /* border-radius: 57px;
  overflow: hidden;
  cursor: pointer; */
}
.right img {
  height: 100%;
  width: 100%;
}
.main {
  height: 100vh;
  background-color: #f6f2ee;
}
.paimeng {
  height: 60%;
  position: absolute;
  right: 0;
}
.paimeng img {
  object-fit: cover;
  height: 100%;
}
.content {
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.shentong {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
}
.userinfoLi {
  line-height: 65px;
}
.userinfoLi::before {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url("../assets/image/noPic.png");
  background-size: cover;
  transform: translateX(85px);
}
.information {
  width: 220px;
  background-color: #f6f2ee;
  border-radius: 10px;
  padding: 20px 0;
  line-height: 0;
  height: 0;
  opacity: 0;
  border: 1px solid #e3e5e7;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
}
.userinfoLi:hover .information {
  opacity: 1;
  line-height: 65px;
  height: auto;
  margin-top: 14px;
}
.round {
  width: 80px;
  height: 80px;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  background-color: #f6f2ee;
  z-index: 1;
}
.contentMain {
  width: 1200px;
  height: 700px;
  margin: 0 auto;
  position: absolute;
}
.Mainborder {
  height: 100%;
  width: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
}
.secondRound {
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  background-color: #f6f2ee;
  z-index: 1;
}
.Mainsecond {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  overflow: hidden;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
}
.secondsolid {
  height: 100%;
  width: 100%;
  border: 2px solid #000;
  z-index: 2;
  box-sizing: border-box;
}
.slip {
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  position: absolute;
  border: 1px solid #711b0f;
  background: #e3d8aa;
  font-family: cursive;
  box-sizing: border-box;
  left: 5px;
  top: 5px;
  font-size: 20px;
  font-weight: bold;
  white-space: pre-line;
}
.slipMain {
  height: 730px;
  width: 320px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 10px solid #d6d0c0;
  position: absolute;
  background-color: #fcfdfa;
  left: 28px;
}
.slipborder {
  height: 525px;
  width: 250px;
  margin-left: calc((100% - 250px) / 2);
  margin-top: 25px;
  background: #e3d8aa;
  box-shadow: 2px 2px 2px 1px rgb (0 0 0/20%);
  position: relative;
}
.slipTittle {
  text-align: center;
  margin-top: 20px;
  color: #711b0f;
}
</style>
