// 初始类泛型的定义

class SelectGirl {
  constructor(private girls: string[]) {
  }
  getGirl(index: number): string {
    return this.girls[index]
  }

}

const selectGirl = new SelectGirl(['张三', '李四', '王五']);
console.log(selectGirl.getGirl(1))

// 类中泛型的定义

class Selct<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index]
  }
}
const girls = new Selct <string> (['张三', '李四', '王五'])

// 泛型中的继承

interface Boy {
  name: string
}
// 这里的 extends 关键字, 表示 T泛型 里, 必须有一个 name 属性

class SelctOne <T extends Boy> {

  constructor(private girls: T[]) {}

  getGirl(index: number): string {
    return this.girls[index].name
  }
}
const girlsOne = new SelctOne (
  [
    {
      name: '张三',
      age: 24
    }
  ]
)

// 下面是另外一种约束方式
class SelctTwo <T extends string | number> {

  constructor(private girls: T[]) {}

  getGirl(index: number): T {
    return this.girls[index]
  }
}
const girlsTwo = new SelctTwo<string>(['张三', '李四'])

