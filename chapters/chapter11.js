/**
 * Theme: Comparison betwen primitive type and object type in javscript
 *
 * There is no pass by reference in JS. Only pass by value exists.
 */

/**
 *  There are 7 data types - null, undefined, number, boolean, Symbol, object
 *  Except for the Object type, the others are called primitive data type
 */

/**
 * Primitive data type - immutable ,which means readonly.
 * We need to separate the concept of variable and the value.
 * A variable is nothing more than an identifier of the location of memory. It is a nickname for a specific area of memories
 * Otherwise, a value is an actual result of evaluation of javascript expressions.
 * In primitive data types, the value is immutable, not a variable.
 * the content of memory area, recording information of a value cannot be overwritten. That's immutable
 *
 */

/**
 * number - immutable.
 * aPrimitive is now referencing the memory location of where 2 is now saved.
 * We cannot change the content of where 2 is saved.
 */
const aPrimitive = 2

/**
 * how about let variable? ... the same as aPrimitive. immutable.
 * The only difference between const and let is whether we can reassign new memory location to a variable.
 * Whether a variable is called as const or let does not have any relation with immutability.
 */
let bPrimitive = 3

/**
 * mutable.
 * the memory location(reference) of the value of {} remains the same
 *  as the value after adding a new property
 */
const bObject = {}
bObject.a = 1

/**
 * Unlike other languages, string is immutable in JS
 * 2 bytes per character.˜
 * When we reassign a new value to existing variable, tha˜t variable that currently references an immutable data changes the reference to new value(with a new address).
 *
 */

//0byte
const str1 = ''
//10bytes
const str2 = 'Hello'

//string is 'array-like object', which allows accessing
str2[1]
//string is primitive dat type. Therefore, we cannot directly change the value of a stirng!
str2[0] = 'h'
//console.log(str2)

/**
 * Primitive data type - pass by value === pass copied contents of value
 *
 */

let score = 80
let copy = score

//console.log(score, copy)

score = 100

//console.log(score, copy)

/**
 * Object data type - pass by reference, is mutable
 * An object variable remembers the object's memory location.
 * The value representing an object's memory location is called 'reference value'
 *
 * A memory location of a variable saves a memory location value(reference value) of an object.
 * In other words, a variable 'points'||'references' an object.
 */

const person = { name: 'Seungrok' }

/**
 * It is possible to dynamically add, delete properties
 *
 */

person.address = 'Seoul'
person.job = 'Frontend Developer'

/**
 * Obejct - pass by reference. Passing its reference value to other identifiers
 * Beware of that multiple variable can share one object.
 * It can be dangerous for an object to be shared and directly mutated somewhere
 *
 */

const otherPerson1 = person
const otherPerson2 = person

otherPerson1.name = 'Alex'
otherPerson2.job = 'Teacher'

/**
 * Copying Object : Shallow copy vs Deep copy
 *
 * Be careful! spread operator does not copy inner objects. Only depth 1 is copied.
 * To deeply copy an object so that you could make two totally different objects, you need to use libraries or manually copy them to the end
 *
 */

const o = { x: { y: 1 } }

//Shallow copy
const shallowCopied = { ...o }
//false
const isDepth0Equal = shallowCopied === o
//true
const isDepth1Equal = shallowCopied.x === o.x

/**
 * Conclusion: It seems that there are two kinds of passing - by value vs by reference.
 * In reality, in any case, it copies the value saved in memory location of a variable.
 * The only difference is whether the copied value is a primitive value or a reference value
 *
 */
