function Person (name) {
  this.name = name
  this.age = 222
  this.sum = function () {
    alert(this.name)
  }
}

console.log(Person.prototype)
Person.prototype.age = 10
Person.prototype.name = 'prototype'

//1.原型链继承
function Per () {
  this.name = 'ker'
}
Per.prototype = new Person('消化')
const per1 = new Per()
console.log(per1.age)
console.log(per1.name)
console.log(per1 instanceof Person)
// 由此可见, 当 采用原型链继承时