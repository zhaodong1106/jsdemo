import DateUtil from "./DateUtil.js";

function doc(){
    return DateUtil.formatDate();
}

let time=(x)=>{
    let elem=document.getElementById("id1");
    elem.innerHTML='dasdas';
    setTimeout(()=>{
        elem.innerHTML="dfvbbb"
    },5000)
}

function time2(x){
    let elem=document.getElementById("id1");
    elem.innerHTML='dasdas';
    setTimeout(()=>{
        elem.innerHTML="dfvbbb"
    },5000)
}
window.onload=()=>{
   time2(2)
};


