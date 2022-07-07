// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import API from './util/api'

import"@/assets/css/style.css"

Vue.config.productionTip = false
Vue.use(API)
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
