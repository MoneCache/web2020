function getHello() {
  const web : string = "hello word"
  console.log(web)
}
// getHello()

// number 类型
const count: number = 1

// string 类型
const name1: string = 'ssss'

//自定义静态类型

interface Person {
  name: string,
  age: number,
  action: () => string
}

const xioaming : Person = {
  name: '小明',
  age: 22,
  action : () => {
    return 'str'
  }
}

// 对象 类型
const obj : {
  name: string,
  age: number
} = {
  name: '笑话',
  age: 22
}
console.log(obj.name)
// 数组类型
const xioahong : string[] = ['张大彪', '李二条']
// 类类型
class Person{}
const dajiao: Person = new Person()
// 函数类型
const haha : () => string = () => {
  return "大脚"
}