import C,{VVV,B,CF} from "./export1.js";
import DateUtil from "./DateUtil.js";
import { SicBo } from "./PromiseDemo.js";

class A {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    sum1(){
        return this.x+this.y;
    }
}

let a=new A(10,11);

console.log(a.sum1());
let b=new B();
console.log(b.test());
console.log(VVV);

let c=new C(22,222);
console.log(c.x)
console.log(CF(22))

console.log(DateUtil.formatTime());
console.log(DateUtil.formatTime());
console.log(DateUtil.formatTime());
console.log(DateUtil.formatyy());
console.log('2222');
SicBo().then(x=>console.log(x));