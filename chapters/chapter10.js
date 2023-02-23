/*
 * 모자딥 10장
 * 객체는 프로퍼티와 매서드(함수)로 구성된다.
 */
const person = {
  name: 'Seungrok',
  sayHello: function () {
    return this.name
  },
}

person.sayHello()

/*
 * 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
 * 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용한다.
 * 프로퍼티 키를 동적으로 생성할 수 있다.
 * 프로퍼티는 동일한 두 프로퍼티가 있다면 뒤에 있는 것이 앞에 프로퍼티를 덮어쓰니 조심할 것.
 * 리액트에서는 상태 업데이트에 이러한 자바스크립트의 특징을 이용하기도 한다.
 */
const personName = {
  firstName: 'Seungrok',
  'first-name': 'Seungrok',
}
const key = 'lastName'
personName[key] = 'Yoon'

/**
 * 메서드는 객체에 붙어있는 함수다.
 * 객체의 프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이면,
 *  마침표 표기법과 대괄호 표기법 둘 다 사용하여 프로퍼티 키에 대응되는 값을 저장할 수 있다.
 * Node.js에서의 평가값과 브라우저 환경에서의 평가값은 다를 수 있다.
 * person2.last-name 은
 *  Node.js환경에서 자바스크립트 엔진이 person2.last를 평가(undefined) - name(식별자로 인식) 하기에 Reference Error: name is not defined이고
 *  반면 브라우저환경에서는 자바스크립트 엔진이 persoin2.last를 평가(undefined) 하고 나서, 브라우저 전역객체의 name이라는 전역변수 name(window창의 이름)
 *  이기에, undefined - '' 라서 NaN가 된다.
 *
 */
const person2 = {
  'last-name': 'Lee',
}
person2['last-name']

/**
 * 프로퍼티 삭제는 delete연산자로 할 수 있다.
 */
delete person2['last-name']

/**
 * 계산된 프로퍼티 이름으로 키를 동적생성할 수 있다.
 */
const prefix = 'prop'
let i = 0
const obj = {}

obj[`${prefix}-${++i}`] = i
obj[`${prefix}-${++i}`] = i
obj[`${prefix}-${++i}`] = i
obj[`${prefix}-${++i}`] = i

/**
 * ES6에서는 매서드 축약 표현으로 매서드를 정의할 수 있는데,
 * 이렇게 축약 표현으로 정의한 매서드는 프로퍼티에 할당한 함수와 다르게 동작한다.
 */
const obj2 = {
  name: 'Lee',
  sayHi: function () {
    return 'Hello'
  },
  sayHiAbbreviated() {
    return 'Hi'
  },
}

obj2.sayHi()
obj2.sayHiAbbreviated()
