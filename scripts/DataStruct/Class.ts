export {}
class Animal {
  protected name: string
  public color: string
  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }
  eat() {
    return `${this.name} eat`
  }
}

class Cat extends Animal {
  call: (() => void) | undefined
  constructor(name: string, color: string) {
    super(name, color) // 先有super调用父类，才有子类属性
    this.name = name // 实例成员
    this.color = color
  }
  walk() {
    return `${this.name} cat walk!`
  }
}
Cat.prototype.call = function () {
  console.log('I can call')
}
const cat = new Cat('jones', 'write')
console.log(cat.eat())
console.log(cat.walk())
cat.call && cat.call()
console.log(typeof Cat)
