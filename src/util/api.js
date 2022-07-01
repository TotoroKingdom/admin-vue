import UserData from "@/util/data/userdata.js"

export default {
    install:function(Vue){
        Vue.prototype.$UserData = UserData
    }
}