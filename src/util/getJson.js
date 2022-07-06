import $ from "jquery"
 const getJson = function(url){
  $.ajaxSetup({async:false})
  var json = null;
  $.getJSON(url, {}, function (data) {
    json = data
  $.ajaxSetup({async:true})
  })
  return json
 }
 export default {
  getJson
 }