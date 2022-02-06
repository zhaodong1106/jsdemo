const a=['a','b','c','d','e'];

a.forEach((item,index)=>console.log(item+":"+index));

a.map((item,index)=>item+1).forEach((e)=>console.log(e));

let c=[];
c[0]={id:1,name:"11"};
c[1]={id:2,name:"22"};
c[2]={id:3,name:"33"};

c.map((item,index)=>item.name+1).forEach((e)=>console.log(e));

let myMap=new Map();
myMap.set(1,11122222222222)
myMap.set(2,222)
myMap.set(3,333)
console.log(myMap.get(1))