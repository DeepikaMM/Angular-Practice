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