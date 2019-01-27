//var ===> function
//let ====> block
//const ====> block

// function sayHello(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// sayHello();


//Objects
// const person = {
//  name: 'Mosh',
//  walk(){},
//  talk(){}
// };
// person.talk();
// person.name= '';
// const targetMember = 'name';
// person[targetMember.value]='John';

//this
// const person = {
//     name: 'Mosh',
//     walk(){console.log(this);},
//     talk(){}
//    };
// person.walk();

// const walk = person.walk.bind(person);
// console.log(walk);
// walk();  //window object

//arrow functions
// const square = function(number){
//     return number * number;
// }

// const square = number=> number * number;
// console.log(square(5));

// const jobs = [
//     {id : 1 , isActive:true},
//     {id : 2 , isActive:true},
//     {id : 3 , isActive:false}
// ];
// const activeJobs = jobs.filter(job=>job.isActive);
// console.log(activeJobs);

// const person = {
//     name: 'Mosh',
//     walk(){
//         var self = this;
//         setTimeout(()=>{
//             console.log("self",self);
//         },1000);
        
//     },
//    };
//    person.walk();

// Array map
// const collars=['red','green',,'blue'];
// const items = collars.map( color=>`${color}`);
// console.log(items);


// Object destructuring
// const address ={
//     street:'',
//     city:'',
//     country:''
// };
// const street = address.street;
// const city = address.city;
// const country = address.country;

// const {street: st} = address;

// const first = [1,2,3];
// const second = [5,6,7];
// const combined = first.concat(second);
// const combined = [...first,...second];
// console.log(combined);

// const obj1={name: 'Mosh'}
// const obj2={age: 23}
// const combined = {...obj1,...obj2};
// console.log(combined);

// class Person{
//     constructor(name){
//         this.name = name ;
//     }
//     walk(){
//         console.log('walk');
//     }
// };

// const person=  new Person('Kavinda');
// person.walk();
// console.log(person);

// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree = degree;
//         }
//     teach(){
//         console.log('teacher');
//     }
// }
// const teacher1 = new Teacher('Rasika');
// teacher1.teach();








