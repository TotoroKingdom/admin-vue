// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API from './util/api'
import {Message} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies';



import"@/assets/css/style.css"


Vue.config.productionTip = false
Vue.use(API)
Vue.use(VueCookies)
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    api:''
  },
  beforeMount(){
    let _this =this;
    var cfg = _this.$UserData.getConfig();
    _this.api = cfg.api.imgs;
    
  }
})
