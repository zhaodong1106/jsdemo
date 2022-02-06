import C,{VVV,B,CF} from "./export1.js";
import DateUtil from "./DateUtil.js";

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

let c=new C();
console.log(c.test3())
console.log(CF(22))

console.log(DateUtil.formatTime());
console.log(DateUtil.formatTime());
console.log(DateUtil.formatTime());