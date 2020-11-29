class Words10  {
    name: string
}


// public 访问属性 允许在类的内部和外部被调用
class Words11  {
    public name: string;
    public sayHello(){
        console.log(this.name + ' say Hello') // 在类的内部调用 也不会报错
    }
}

const pp = new Words11
pp.name = 'lisi' // 这里不会报错


// private 访问属性讲解 只允许再类的内部被调用，外部不允许调用

class Person11 {
    private name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}
//-------以下属于类的外部--------
const person = new Person11()
person.name = 'jspang.com'    //此处报错
person.sayHello()
console.log(person.name)  //此处报错


// protected 访问属性讲解 允许在类内及继承的子类中使用

class Person12 {
    protected name:string;
    public sayHello(){
        console.log(this.name + 'say Hello')  //此处不报错
    }
}

class Teacher extends Person12{
    public sayBye(){
        this.name; // 这里也不会报错
    }
}