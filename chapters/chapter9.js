const a = Boolean('x')

const sum = (a, b) => a + b

module.exports = sum

//falsy 값인 0, 빈 문자열 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
const foo = '' || 'default String'
console.log(foo)
