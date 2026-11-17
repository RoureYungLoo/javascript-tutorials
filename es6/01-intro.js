// let, const, block 作用域
function let_const_block() {
  var a = 2;
  {
    let a = 3; // 块级作用域
    console.log(a);
  }
  console.log(a);

  {
    // const 指向不变
    const AGES = [14, 15];
    AGES.push(16);
    console.log(AGES);
    // AGES = [10]; // 报错
  }
}

// 箭头函数
var arrow_function = (a, b) => {
  console.log(a + b);
};

function toUpper() {
  let fruits = ["apple", "banana", "orange"];
  let uppers = fruits.map((fruit) => {
    return fruit.toUpperCase();
  });
  console.log(uppers);
}

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

function testPersion() {
  var person = new Person();
  console.log(person);
}

// 函数参数默认值
function getPrice(price, tax = 0.7) {
  var p = price * (1 + tax);
  console.log(p);
}

// spread (传递) / rest (剩余) 操作符
function foo(x, y, z) {
  console.log(x, y, z);
}

function bar(a, b, ...args) {
  console.log(args);
}

function testFoo() {
  var day = [1, 2, 3];
  foo(...day);
}

function testBar() {
  bar(1, 2, 3, 4, 5);
}

// 对象扩展
function getCar(make, model, value) {
  return {
    make, // make: make,
    model, // model: model,
    value, // value: value,

    ["make" + make]: true,

    // 函数可省略 function 关键字
    depreciate() {
      this.value -= 2000;
    },
  };
}

function testGetCar() {
  var car = getCar("audi", "q5l", 200000);
  car.depreciate();
  console.log(car);
}

// 二进制 八进制 字面量
function testliter() {
  let octonary = 0o567; // 0O567
  let binary = 0b101; // 0B101
  console.log(octonary, binary);
}

// 对象/数组解构
function testDestructure(params) {
  // 数组解构
  var getArr = () => [1, 2, 3];
  let [a, b, c] = getArr();
  console.log(a, b, c);

  // 对象解构
  let { make: p1, model: p2, value: p3 } = getCar("audi", "q5l", 2000);
  console.log(p1, p2, p3);
}

// 对象超类(父类,基类)
function testObjectSuper() {
  var parent = {
    foo() {
      console.log("父类方法");
    },
  };

  var child = {
    foo() {
      console.log("子类方法1");
      super.foo();
      console.log("子类方法2");
    },
  };

  Object.setPrototypeOf(child, parent);
  child.foo();
}

// 模板语法
function testString() {
  var str = `当前时间: ${new Date().toLocaleString()}`;
  console.log(str);
}

// for of / for in

function testForOfForIn() {
  // 遍历数组
  let nicknames = ["di", "boo", "pun"];
  nicknames.size = 3;
  for (let nickname of nicknames) {
    console.log(nickname);
  }
  // 遍历对象
  for (let nickname in nicknames) {
    console.log(nickname);
  }

  var obj = {
    name: "xiaoming",
    age: 23,
  };

  for (let prop in obj) {
    console.log(prop);
  }
}

// map, weak map
function testMap() {
  var map1 = new Map();
  var keyString = "a string",
    keyObject = {},
    keyFunc = function () {};

  map1.set(keyString, "string 类型key的value");
  map1.set(keyObject, "对象类型key的value");
  map1.set(keyFunc, "函数类型key的value");
  console.log(map1.size);

  console.log(map1.get(keyString));
  console.log(map1.get(keyObject));
  console.log(map1.get(keyFunc));
}

function testWeakMap() {
  let w_map = new WeakMap()
  
}

// set, weak set
function testSetAndWeakSet() {}
// let_const_block()

// arrow_function(1, 2);

// toUpper()

// testPersion()

// getPrice(10, 0.1);

// testFoo();

// testBar()

// testGetCar();

// testliter()

// testDestructure();

// testObjectSuper();

// testString();

// testForOfForIn();

// testMap()
