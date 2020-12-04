//  泛型的定义 <>
function join(first: string | number, second: string | number) {
  return `${first}${second}`
}
join('zhangsan', '.com')

function joinOne<T>(first: T, second: T) {
  return `${first}${second}`
}
joinOne< string > ('haha', 'xixi')

// 泛型中 数组的使用
// 方式 一
// function myFun<ANY> (params: Array<ANY>) {
//   return params
// }
//方式二
function myFun<ANY> (params: ANY[]) {
  return params
}
myFun< string > (['123', '456']) // 这里的 string 类型, 调用的时候, 可以根据需要随意修改


// 多个泛型的定义
function joinSecond<T, P>(first: T, second: P) {
  return `${first}${second}`
}
joinSecond< number, string > (1, '2')

// 泛型的类型推断
// 以上函数, 还可以下面这样调用, 省略了 泛型类型定义, 这就是 泛型中的类型推断, (不建议经常使用, 会导致代码可读性, 健壮性较差)

joinSecond(2, '4') 