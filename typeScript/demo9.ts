// 类的基本使用
class Lady1 {
    content = '这个是内容';
    sayHello() {
        return this.content
    }
}

const goodees = new Lady1()

// 类的继承

class Lady2 extends Lady1 {
    sayLove() {
        return 'i love you'
    }
}

//类的重写

class Lady3 extends Lady2 {
    sayLove() {
        return "I doon't love you"
    }
}

// 父类中的 方法的使用 super
class Lady4 extends Lady1 {
    say() {
        return super.sayHello + '您好' // 这里的 super, 指代的 是父类 Lady1
    }
}