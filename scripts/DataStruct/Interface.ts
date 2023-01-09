export {}
// 接口是一种规范，开发阶段进行约束，编译后不存在接口
interface Person {
  uname: string
  age: number
  bust: number
  waistline?: number //?表示可选，有序列化，无
  [propName: string]: any
  say(): string
}
interface Teacher extends Person {
  teach(): string
}
const person = {
  uname: 'jones',
  age: 18,
  bust: 94,
  waistline: 90,
  sex: 'female',
  say() {
    return 'sad'
  },
  teach() {
    return 'teaching'
  }
}
class jiejie implements Person {
  uname = 'asaw'
  age = 18
  bust = 90
  say() {
    return '欢迎光临'
  }
}
const fun = (person: Teacher): void => {
  person.age <= 24 && person.bust > 90 && console.log(person.uname, '进入面试')
  person.age > 24 || (person.bust <= 90 && console.log(person.uname, '被淘汰'))
  person.sex && console.log(person.sex)
}

fun(person)
