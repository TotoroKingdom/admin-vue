import UserData from "@/util/data/userdata.js"

export default {
    install:function(vue){
        Vue.prototype.$UserData = UserData
    }
}