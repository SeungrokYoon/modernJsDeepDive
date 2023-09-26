/**
 * Theme: Function
 */

//paramters are x,y
function add(x, y) {
  return x + y
}

//We need to pass arguments(actual values) to a functino to operate it
add(2, 5)

//In JS, funtions are Object data type. Therefore, we can name it
const variable = function add(x, y) {
  return x + y
}

console.info(variable)

/**
 * Functions can be optionally named.
 *  Named one is called 'named function',
 *  and unnamed one is called 'anonymous function'.
 *
 * Functions are evaluated and have values. That value is object type.
 * Therefore, functions are objects.
 *
 * Funtion objects are different from normal objects.
 *  Functions are callable, whereas normal objects are not.
 * Function objects have its discriminated properties that normal objects don't have.
 *
 * There are 4 ways of defining functions.
 *
 * In JS, defining is automatiaclly followed by declarating functions.
 * Defining is  allocating memory to declared one, creating identifiers.
 *
 */

/**
 * Declaration
 * function declaration looks the same as functino literal. However, declaration cannot omit name.
 * Declaration is not a statement which is not an expression(of course, there exists a statement which is an expression vice versa)
 */

function subtract(x, y) {
  return Math.max(x, y) - Math.min(x, y)
}

// Expression
const subtract2 = function (x, y) {
  return Math.max(x, y) - Math.min(x, y)
}

// Function constructor
const multiply = new Function('x', 'y', 'return x*y')

// arrow function
const arrow = (x, y) => x + y

function foo() {
  console.info('foo')
}

foo()

const a = function bar() {
  console.info('bar')
}

/*
 * bar() => bar is not defined <- why? named function literal is interpreted differently by context.
 *
 */

// function name is valid only inside the function
const add3 = function foo3(x, y) {
  /*
   * foo3(x+1, y+1) possible since function name is valid only inside the function
   * foo3(x + 1, y + 1)
   */
  return x + y
}
//valid
add3(2, 5)
const sum = add3(3, 6)

//invalid : foo3 is not defined

//foo3()

/**
 * Function definition by declaration and function expression are different
 *
 * in that functions defined by declaration can be called before its declaration on the
 * other hand functions defined by expression cannot be called before its expression.
 *
 */

console.info(declaredFunction)
console.info(expressedFunction)

console.info(declaredFunction(2, 5))
console.info(expressedFunction(2, 5))

/**
 * In the above console statement, we can reference declaredFunction although it is called before definition line.
 * However, we cannot reference expressedFunction since it is an expression, which requires validation(calculation).
 *
 */
function declaredFunction(x, y) {
  return x + y
}

const expressedFunction = function (x, y) {
  return x + y
}

/**
 * This difference implies that these two functions are generated in different timeline.
 *
 * Declarated function  statements are executed before Javascript runtime. Before runtime, all the declarations are executed.
 * Expressed function statements are executed at runtime. Therefore, before reading the expressed statements, it cannot be executed.
 * This kind of  operational uniqueness is called  'function hoisting', which seems like declaration statements are hoisted at the top of the code.
 * Physically it is not what it looks like...but it looks like :) *
 *
 * In declared functions, function hoisting occurs, but value hoising (initializing as undefined) occurs to function expressions
 *
 * Douglas Crockford, who invented JSON, encourages to use function expression to avoid hoisting issue.
 *
 */
