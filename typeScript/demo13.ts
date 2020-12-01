// 类中的只读属性 readonly
class Person13 {
  constructor(public readonly name: string) {}
}

const person13 = new Person13('xioahau13')
console.log(person13.name)
// person13.name = "1111" // 报错


// 抽象类的使用 关键字 abstract

abstract class Girl {
  abstract skill()  // 没有具体的方法时, 可以不写大括号
}

class Waiter extends Girl{
    skill(){
        console.log('大爷，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('大爷，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('大爷，来个SPA全身按摩吧！')
    }
}