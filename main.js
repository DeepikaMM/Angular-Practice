"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var nultitype;
//functions
function add(num1, num2) {
    return num1 + num2;
}
function add2(num1, num2) {
    return num1 + num2;
}
//add2(); // error
var res = add2(10, 10);
function ad2(num1, num2) {
    return num1 + num2;
}
var res1 = ad2(8);
function fullname(person) {
    console.log("" + person.firstname);
}
var p;
fullname(p);
//classes and modifiers
var Emp = /** @class */ (function () {
    function Emp(name) {
        this.empname = name;
    }
    Emp.prototype.greet = function () {
        console.log(this.empname);
    };
    return Emp;
}());
var emp1 = new Emp("deepika");
console.log(emp1.empname);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("nothis is doing");
    };
    return manager;
}(Emp));
var mang = new manager("deepika");
mang.greet();
mang.delegatework();
