// 类的构造函数
class Person11 {
  public name: string;
  constructor(name: string) {
    this.name = name
  }
}

const person11 = new Person11('笑话')
console.log(person11.name)

// 类继承中的构造器写法

class Teacher extends Person11 {
  // 子类继承父类时, 必须要调用 super(), 这里的 super 实际指的是父类构造器
  constructor(public age: number = 12) {
    super('小华')
  }
}
const teacher = new Teacher()
console.log(teacher.name)
console.log(teacher.age)
