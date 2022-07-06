import MyHttp from "../request"
import GetJ from "../getJson"

/* 获取webconfig配置 */
const getConfig = function(){
  return GetJ.getJson('../static/WebConfig.json')
}
const Userbaseinfo = function (url,params) {
  return MyHttp.FetchPost(url,params)
}
export default {
  getConfig,
  Userbaseinfo
}
