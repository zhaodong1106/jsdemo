async function testAsync(){
    await sleep(5000);
    return "dasda";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


testAsync().then(x=>console.log(x)) 
console.log('dasdasdas')