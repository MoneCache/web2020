// 类型注解 type annotation
let count1: number;
count1 = 123

// console.log(count)

// 类型推断
let num = 3


// 工作中的潜规则 (潜规则)
// 1. 如果 TS 能够自动分析变量类型, 我们就什么也不需要做了
// 2. 如果 TS 无法分析变量类型的话, 我们就需要使用类型注解

// 不用写类型注解的例子
const one = 1;
const two = 2;
const three = one + two

// 需要类型注解的例子
function getTotal(one: number, two: number): number {
  return one + two
}

const total = getTotal(1, 2)


// 函数无返回值的定义方法
function sayHello(): void {
  console.log('sayHello')
}

let say: () => void

// never 返回值类型

function errFunc(): never {
  throw new Error("11111");
  
}

function forNever(): never {
  while(true) {
    console.log('hello')
  }
}

// 函数对象为参数解构时的 注解
function add({ one, two }) {
  return  one + two
}

const total1 = add({ one: 1, two: 2 })
console.log(total1)


// 正确的注释
function add1({ one, two }: { one: number, two: number}): number {
  return one + two
}

const two1 = add1({ one: 10, two: 20 })
console.log(two1)

function name3({ one }: { one: string }):string {
  return one
}
console.log(`name`, name3({ one: '李四' }))