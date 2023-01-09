import { log } from 'util'

export {}

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(set.add(1))
console.log(set.has(1))
console.log(set.delete(1))

console.log(set.keys())
console.log(set.values())
console.log(set.entries())
set.forEach(console.log)
console.log(set.size)
set.clear()
console.log(set.size)

const a = new Set([1, 2, 3])
const b = new Set([4, 3, 2])

// 并集
const union = new Set([Array.from(a), Array.from(b)])
// Set {1, 2, 3, 4}
console.log(union)

// 交集
const intersect = new Set(Array.from(a).filter((x) => b.has(x)))
console.log(intersect)
// set {2, 3}

// （a 相对于 b 的）差集
const difference = new Set(Array.from(a).filter((x) => !b.has(x)))
console.log(difference)
// Set {1}

// WeakSet 的成员只能是对象，而不能是其他类型的值。

const ws = new WeakSet()
