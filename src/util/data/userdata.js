const Userbaseinfo = function () {
  return new Promise((resolve, reject) => {
    fetch('/apis').then(async (result) => {
      if (result.ok) {
        /* 获取json对象 */
        // const res = await result.json()
        const res = await result.text()
        resolve(res)
      }
      reject(new Error('Error'))
    }).catch((err) => {
      reject(err)
    })
  })    
}

export default {
  Userbaseinfo
}
