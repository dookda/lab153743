var x = 10;

// function non parameter

function calBMI() {
    var a = 2
    var b = function () { a * 3 };
    return b
}

var res = calBMI();

// console.log(res)


// function plus(x) {
//     let a = 2 + x;
//     return a
// }

var plus = (x) => { return x }
var plus = (x, y) => { return x + y }

var b = plus(3, 5);
var c = plus(13, 6);
var d = plus(30, 3);
// console.log(b, c, d);

// const p = new Rectangle()


let dd = Date()
// console.log(dd)

// var i;
// for (let i = 0; i < 5; i++) {
//     console.log("รอบที่ " + i);
// }

var arr = [{ a: "d" }, 5, 5, 4, 8, 9, 4, 1];

// arr.forEach((x) => {
//     console.log(x * 2);
// })
// console.log(arr[2]);


// var a = prompt("ซื้อกี่ครั้ง? ")


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get insert() {
        // connect datbase
    }
    get area() {
        return this.calcArea()
    }

    calcArea() {
        return this.width * this.height
    }
}

var polygon1 = new Rectangle(5, 2);
var polygon2 = new Rectangle(9, 7);
var polygon3 = new Rectangle(9, 9);

// console.log(polygon1.area)
// console.log(polygon2.area)

// object
let user = {
    fname: "sakda",
    lname: "homhuan",
    sayHi: function () {
        console.log("Hi, " + this.fname + " " + this.lname)
    }
}

// เข้าถึง property
console.log(user.fname);
console.log(user.lname);
// เข้าถึง method
user.sayHi()