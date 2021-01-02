/**
 * (1) x us a string, b/c we've initialized it
 */
let x = 'hello world'

/**
 * (2) reassignment is fine
 */
x = 'hello mars'

/**
 * (3) error if we try to change type
 */
x = 42

/**
 * (4) the type is 'hello world' because this constant can't hold any other string
 */
const y = 'hello world'
function foo(arc: 'hello mars') {

}
// Error! Types are not compatible
foo(y)

/**
 * (5) sometimes we need to declare a variable w/o initializing it
 */
let z // At this point "z" has type "any" (top level type). It can hold any value
if (Math.random() > 0.5) {
  z = 41 // Hence assigning it a number value is OK
} else {
  z = 'aaa' // And assigning it a string value is also OK
}

/**
 * (6) we could improve this situation by providing a type annotation when declaring our variable
 */
let zz: number
if (Math.random() > 0.5) {
  zz = 43
} else {
  zz = 'abc' // ERROR! Type 'string' is not assignable to type 'number'
}
