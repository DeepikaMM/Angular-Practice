"use strict";
exports.__esModule = true;
var message = "hello world";
console.log(message);
var name = "deepika";
var notname = [1, 23, 7];
var hername = "deepika";
hername = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
//type inference
var a;
a = "deepika";
a = 10;
var b = 10;
// b= "deepika";
