// 一般数组类型的定义
const numberArr = [1, 2, 3]

const numberArr1: number[] = [1, 2, 3]

const numberArr2: string[] = ['a', 'b', 'c']

const undefinedArr: undefined[] = [undefined, undefined]

// 1.1多个数据类型时
const arr: (number | string)[] = [1, 'string', 2, null, undefined]
console.log(arr)

// 数组中对象类型的定义

const xiaojiejies: { name: string, age: number}[] = [
    {
        'name': '刘颖',
        'age': 18
    }
]

// 1.1 类型别名, 定义数组对象
type Lady = { name: string, age: number }
const xiaojiejies1: Lady[] = [
    {
        name: '李四',
        age: 25
    }
]
