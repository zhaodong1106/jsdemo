function SicBo(){
    return new Promise((resolve,reject)=>{
        console.log("开始摇色子!");
        setTimeout(() => {
            let n=parseInt(Math.random()*6+1,10);
            resolve(n)
        }, 1000);
    })
}

function Test(x){
    return new Promise((resolve,reject)=>{
            if(x>1){
                resolve(x);
            }else{
                throw new Error(x);
            }
    });
}

Test(1).then(x=>console.log(x)).catch((error)=>console.log(error));