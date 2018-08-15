export {}
let message = "hello world"
console.log(message);
let name: string = "deepika";
let notname : Array<number> = [1,23,7];
let hername : any = "deepika";
hername = 10;

function hasName (obj: any): obj is {name:string}{
    return !! obj && 
      typeof obj === "object" &&
         "name" in obj
}

//type inference

let a;
a = "deepika";
a=10;

let b=10;
// b= "deepika";

let nultitype : boolean | number;


//functions

function add(num1,num2) {
    return num1+num2;
}

function add2(num1:number, num2:number) : number{
    return num1+num2;
}
//add2(); // error
let res = add2(10,10);
function ad2(num1:number, num2?:number) : number{
    return num1+num2;
}
let res1 = ad2(8);

//interface
interface Person {
    firstname:string;
    lastname?:string;
}
function fullname(person: Person) {
    console.log(`${person.firstname}`);
}
let p:{
    firstname:"deepika";
    
};
fullname(p);

//classes and modifiers

class Emp {
   // private empname: string;
   empname: string;
   //protected empname : string;
    constructor(name: string) {
        this.empname = name;
    }
    greet() {
        console.log(this.empname);
    }
}

let emp1 = new Emp("deepika");
console.log(emp1.empname);
emp1.greet();

class manager extends Emp {
    constructor(managername :string) {
        super(managername);
    }
    delegatework() {
        console.log("nothis is doing");
    }

}

let mang = new manager("deepika");
mang.greet();
mang.delegatework();