const o={
    name:'2222dda的撒旦',
    id:2222
};
var foo = [{
    name: "Stark",
    age: 21
},{
    name: 'Jarvis',
    age: 20
},{
    name: 'Pepper',
    age: 16
}];

let mm=foo.filter(person=>person.age>16)
    .map(person=>{
        return {
            a:person,
            b:1
        }
    });
mm.forEach(e=>console.log(e))
