function SicBo(){
    return new Promise((resolve,reject)=>{
        console.log("开始摇色子!");
        setTimeout(() => {
            let n=parseInt(Math.random()*6+1,10);
            resolve(n)
        }, 1000);
    })
}

SicBo().then(e=>console.log(e));