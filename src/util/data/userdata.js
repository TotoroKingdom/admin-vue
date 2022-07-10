import MyHttp from "../request"
import GetJ from "../getJson"

/* 获取webconfig配置 */
const getConfig = function(){
  return GetJ.getJson('../static/WebConfig.json')
}
const Userbaseinfo = function (url,params) {
  return MyHttp.FetchPost(url,params)
}
const getSlip = function (url,params,headersparams) {
  return MyHttp.FetchPost(url,params,headersparams)
}
export default {
  getSlip,
  getConfig,
  Userbaseinfo
}
