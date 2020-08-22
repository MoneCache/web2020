function Person (name) {
  this.name = name
  this.age = 222
  this.sum = function () {
    alert(this.name)
  }
}
const persons = new Person('zs')
persons.sex = '男'
// console.log(Person.prototype)
Person.prototype.age = 10
// Person.prototype.name = 'prototype'

//1.原型链继承
function Per () {
  this.name = 'ker'
}
// 新实例, 无法向其父实例 传参 或者说 传参单一
// 新实例, 继承单一
// 新实例, 无法继承父实例 的属性 和 方法
// 新实例, 共享同一个父类的(构造函数属性,方法, 原型属性, 方法)
Per.prototype = new Person()
const per1 = new Per()
console.log(per1.age)
console.log(per1.sex)
console.log(per1.name)
// console.log(per1 instanceof Person)
// 由此可见, 当 采用原型链继承时