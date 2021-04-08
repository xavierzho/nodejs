function fn(): void{
    console.log(123)

    // return "" //不需要返回值时，使用viod
}

function fn2(): never {
    while (true) { }
    throw new Error("error msg") // 主动抛出异常
}
