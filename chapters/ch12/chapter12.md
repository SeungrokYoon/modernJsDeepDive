# Modern Javscript DeepDive Chapter 12 - Function

## 12.4.1

```ts
/**
 * @summary
 * In javascript, function is not called by its name, but by its
 * IDENTIFIER pointing to the function object declared!!!!!!!
 */

function foo() {****
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

```

Javascript implicitly create an identifier of a functino with the same name asthe function!

Therefore, it is kind of we call a function by its identifier instead of the name of a function.

## 12.4.2 Function Expression

In javascript, Functions are **First-Class Citizen**, which means functions can be treated as values.

```ts
const add = function (x, y) {
  return x + y
}

console.info(add(2, 5))
```

We can omit the functino name, if we `define` functions with expressions, not by declaration. The reason is - already illustrated before - that functions are called by its identifier, not by the name of the function.

Therefore, it is easily predictable that the code below would throw a Reference error since the name of a function is available only inside the function block itself!

```js
const add = function foo(x, y) {
  return x + y
}

console.info(foo(2, 5))
```
