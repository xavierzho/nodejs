export {}
// built-in Object class
const d = new Date()

// custom Object
const o = {
  name: 'jones',
  age: 16
}

const f = new Function('a', 'b', `console.log(a+b)`)
console.log(d instanceof Object)
console.log(f instanceof Object)
console.log(f(o.age, o.age))

// defineProperty

console.log(
  Object.defineProperty(o, 'num', {
    value: 23
  })
)
console.log(o)
