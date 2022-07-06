const Ourl = 'http://120.78.215.214/api'
// const Ourl = ''
/* get请求封装 */
const Fecthget = function(url,params){
let List = []
for(let key in params){
  let str = `${key}=${params[key]}`
  List.push(str)
}
const data= List.join('&')

let allUrl = `${Ourl+url}?${data}`;

const options = {
  method:"GET",
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  }
}

return fetch(allUrl, options).then(res => {
  if(res.ok){
    return res.json();
  }
  Promise.reject(new Error('ERROR'))
}).catch(err => {
  Promise.reject(err)
})
}

// post请求封装
const FetchPost = function (url, params) {
  const options = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
  }

  return fetch(Ourl+url, options).then(res => {
    
      if(res.ok){
        return res.json();
      }
      Promise.reject(new Error('ERROR'))
  }).catch(err => {
      Promise.reject(err)
  })
};

export default{
  Fecthget,
  FetchPost,
  

}