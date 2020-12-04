// enum 枚举类型讲解

// enum Status {
//   ZHANGSAN,
//   LISI,
//   WANGWU
// }

enum Status {
  ZHANGSAN = 1, // 当指定下标后, 后面的会顺势增加
  LISI,
  WANGWU
}

function getServe(status: any) {
  if (status === Status.ZHANGSAN) {
    return 'zhangsan'
  }
  else if (status === Status.LISI) {
    return 'lisi'
  }
  else if (status === Status.WANGWU) {
    return 'wangwu'
  }
}
// 枚举值 也可以通过 下标反查
console.log(Status[2]) // LISI

const res = getServe(Status.LISI)
console.log(`我是谁 ? + ${res}`)

console.log(Status.ZHANGSAN); // 0
console.log(Status.LISI); // 1
console.log(Status.WANGWU); // 2