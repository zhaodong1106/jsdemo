function SicBo(){
    return new Promise((resolve,reject)=>{
        console.log("开始摇色子!");
        setTimeout(() => {
            let n=parseInt(Math.random()*6+1,10);
            resolve(n)
        }, 3000);
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


export {SicBo,Test};