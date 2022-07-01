const Userbaseinfo = function(){
    return new Promise((resolve, reject) => {
        fetch().then(async (result)=>{
            if(result.ok){
            const res = await result.json()
                resolve(res)
            }
            reject(new Error('Error'))
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default{
Userbaseinfo
}