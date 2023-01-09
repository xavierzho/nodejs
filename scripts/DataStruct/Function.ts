export {}

function namedFunction() {
  console.log('namedFunction')
}

const anonymousFunction = function () {
  console.log('anonymousFunction')
}

const FunctionConstructor = new Function('a', 'b', 'console.log(a+b)')
FunctionConstructor(1, 2)

const arrowFunction = () => {
  console.log('arrowFunction')
}

// closure
function outer() {
  const a = 1
  function inner() {
    console.log(a)
  }
  return inner
}
outer()()

// function overload
function fn(): void {
  console.log(123)

  // return "" //不需要返回值时，使用viod
}

function fn2(): never {
  while (1 === 1) {}
  throw new Error('error msg') // 主动抛出异常
}
