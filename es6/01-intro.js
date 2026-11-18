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

// 对象扩展: 属性简写, 属性计算, 函数简写
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

// map
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

// weak map, key 必须是对象,
// weak map api: set(),get(), has(), delete()
// weak map 的 key 没有其他对象引用时, 该key可以被GC回收, 但并不是立即回收
let window = {};
function testWeakMap() {
  let w_map = new WeakMap();
  // w_map.set("str_key", "value for str key"); // TypeError: Invalid value used as weak map key
  let obj1 = {},
    obj2 = function () {},
    obj3 = window;

  w_map.set(obj1, "value for key obj1");
  w_map.set(obj2, "value for key obj2");
  w_map.set(obj3, undefined);

  console.log(w_map.get(obj1));
  console.log(w_map.get(obj2));
  console.log(w_map.get(obj3));
}

// set
function testSet() {
  let langs = new Set([1, 2, 3]);
  langs.add("c");
  langs.add("c++");
  langs.add({ name: "js", value: "javascript" });
  console.log(langs);
  console.log(langs.size);

  // forEach 遍历
  langs.forEach((item) => console.log(item));

  // forOf 遍历
  for (const element of langs) {
    console.log(element);
  }
}

// weak set
function testWeakSet() {
  let w_set = new WeakSet();
  let obj4 = {};
  let obj5 = {};

  w_set.add(window);
  w_set.add(obj4);

  console.log(w_set.has(window));
  console.log(w_set.has(obj5));

  w_set.delete(window);
  console.log(w_set.has(window));
}

// class, 原型链的语法糖
function testClass() {
  class Task {
    constructor() {
      console.log("call consturctor");
    }

    showId() {
      console.log(123);
    }

    static loadAll() {
      console.log("Loading all tasks ...");
    }
  }

  console.log(typeof Task); // function
  let t1 = new Task();
  t1.showId();
  Task.loadAll();

  class Car {
    constructor() {
      console.log("调用父类/基类构造方法");
    }
  }

  class BWM extends Car {
    constructor() {
      console.log("调用子类构造方法1");
      super();
      console.log("调用子类构造方法2");
    }
  }

  let bwm = new BWM();
}

// Symbol, 不可变唯一类型
function testSymbol() {
  let s1 = Symbol("desc");
  console.log(s1);

  let obj6 = {
    name: "testSymbol",
    [Symbol("random")]: "value for symbol",
  };

  console.log(obj6);
  console.log(Object.getOwnPropertyNames(obj6));
  console.log(Object.getOwnPropertySymbols(obj6));
}

// Iterator, 迭代器
function testIterator() {
  let days = [1, 2, 3, 4, 5];
  let itr = days[Symbol.iterator]();
  let n = itr.next();
  while (!n.done) {
    console.log(n);
    n = itr.next();
  }
}

function* getNumber() {
  let n = 1;
  while (true) {
    yield 2 * n++ - 1;
  }
}
// Generators 生成器
function testGenerator() {
  let gen = getNumber();
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
}

// Promise

/**
 * Creates a new Promise.
 * @param executor A callback used to initialize the promise. This callback is passed two arguments:
 * a resolve callback used to resolve the promise with a value or the result of another promise,
 * and a reject callback used to reject the promise with a provided reason or error.
 */

// (executor: (resolve: () => void, reject: () => void) => void)
function testPromise(n) {
  let p = new Promise(function (resolve, reject) {
    if (n === 1) {
      resolve("success, n is 1");
    } else {
      reject("error, n is not 1");
    }
  });

  p.then(
    (value) => console.log(value),
    (reason) => console.log(reason),
  );
}

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

// testWeakMap();

// testSet();

// testWeakSet();

// testClass();

// testSymbol();

// testIterator();

// testGenerator();

// testPromise(1);

// testPromise(2);