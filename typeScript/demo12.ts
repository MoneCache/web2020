// 类的 getter 和 setter
class Person12 {
  constructor(private _age: number) {}
  get age() {
    return this._age
  }
  set age(age: number) {
    this._age = age
  }
}
const xiaohua12 = new Person12(50)
console.log(xiaohua12.age) // 50

xiaohua12.age = 28
console.log(xiaohua12.age) // 28

// 以上, gettre 和 setter 可以很好的保证 类中 private 私有变量


// 类中的 static

class Girl12 {
  static sayLove() {
    return 'I love you'
  }
}
// 当 方法 sayLove 没有 static 修饰时, 需要 实例化后,才可调用
// const girl12 = new Girl12()
// girl12.sayLove()

// 当 方法 加上 static 修饰时, 就可以直接调用了
Girl12.sayLove()