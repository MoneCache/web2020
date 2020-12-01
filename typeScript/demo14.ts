// 联合类型展示
interface Waiter {
  flag: boolean;
  say: () => {}
}

interface Teacher14 {
  flag: boolean;
  skill: () => {}
}

// 类型保护 --- 类型断言

function judge(animal: Waiter | Teacher14) {
  if (animal.skill) {
    (animal as Teacher14).skill()
  }
  else {
    (animal as Waiter).say()
  }
}

// 类型保护 --- in 语法 


function judgeWhoTwo(anim: Waiter | Teacher14) {
  if ('say' in anim) {
    anim.say();
  }else {
    anim.skill();
  }
}
// 下面这样写会报错, 目前不知道怎么回事
// function judgeWhoThree(anim: Waiter | Teacher14) {
//   if ('skill' in anim) {
//     anim.skill();
//   }else {
//     anim.say();
//   }
// }

// 类型保护 --- typeof 语法

function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  } 
  return first + second
}

// 类型保护 --- instanceof 语法

class NumberObj {
  count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}