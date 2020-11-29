// interface 接口类型定义
// 1.1 接口类型 和 类型别名的区别
// 类型别名可以直接给类型, 比如 string , 而接口必须是对象

// 1.2 接口类型中, 非必选类型的定义

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number // 非必选
}

const xioamhong: Girl = {
    name: '小红',
    age: 10,
    bust: 50
}
// 此时, waistline 可以定义 也可以不定义

// 1.3 接口中添加任意值

interface People {
    name: string;
    age: number;
    bust: number;
    waistline?: number // 非必选
    [propsname: string]: any // 属性的名字是字符串类型, 属性的值可以是任何类型
}

const xiaohua: People = {
    name: '小红',
    age: 10,
    bust: 50
}
xiaohua.sex = '男' // 这里就不会报错

console.log(xiaohua)

// 1.4 接口中的方法
interface People1 {
    name: string;
    say(): string
}
const xiaoming: People1 = {
    name: '小明',
    say() {
        return '哈哈哈'
    }
}

// 1.5 接口 和 类 的约束 和 继承
// 1.5.1 如果是通过 implements关键字 继承过来的属性, 必须要写全

class xioamao implements People1 {
    name: 'maomi';
    say() {
        return '嘻嘻'
    };
    hello: () => void
}
// 1.5.2 如果是通过 extend 关键字 继承过来的, 属性可以不必要写全, 按需即可

interface Teacher extends People1 {
    teach(): string
}

const people1: Teacher = {
    name: '张三',
    say() {
        return '11111'
    },
    teach() {
        return '我是一个老师'
    }
}

// 二者同样, 也可以添加新的属性