// Chapter 12 - Functino part2
/**
 * @summary
 * In javascript, function is not called by its name, but by its
 * IDENTIFIER pointing to the function object declared!!!!!!!
 */

function foo() {
  console.info('foo')
}

foo()
/*
 * (function bar() {
 *   console.info('bar')
 * })
 *
 * bar() => bar is not defined
 */
/**
 * Javascript implicitly create an identifier of a functino with the same name as
 * the function!
 *
 *Therefore, it is kind of calling the identifier instead of calling the name of a function
 */
