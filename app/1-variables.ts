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

//== Arrays ==//

/**
 * (8) simple array types can be expressed using []
 */
let aa: number[] = []
aa.push(33)
aa.push('23') // Error: Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * (9) we can even define a tuple with a fixed length
 */
let bb: [number, string, string, number] = [
  69,
  'Fake Straße',
  'Nowhere, Berlin',
  10439
]
bb.push(1, 1, 1, 1, 1, 1) // Array methods like push() are not type-safe!
bb = [1, 2, 3] // Error: Type 'number' is not assignable to type 'string'

/**
 * (10) Tuple values require type annotations
 */
const xx = [32, 32] // number[]
const yy: [number, number] = [32, 31]

//== Objects ==//
/**
 * (11) Object types can be expressed using {} and property names
 */
let cc: { houseNumber: number; streetName: string }
cc = {
  streetName: 'fake street',
  houseNumber: 420,
}

// Error - Property 'streetName' is missing in type '{ houseNumber: number; }' but required in type '{ houseNumber: number; streetName: string; }'
cc = {
  houseNumber: 33
}

let dd: { houseNumber: number; steetName?: string }
// This is valid - streetName is optional
dd = {
  houseNumber: 20
}

// (13) If we want to re-use this type, we can create an interface
interface Address {
  houseNumber: number,
  streetName?: string,
}
let ee: Address = { houseNumber: 123 }

/**
 * (14) Intersection types
 * Sometimes we have a type that can be one of several things
 */
export interface HasPhoneNumber {
  name: string,
  phone: number,
}

export interface HasEmail {
  name: string,
  email: string
}

let contactInfo: HasEmail | HasPhoneNumber = Math.random() > 0.5
  ? {
    // We can assign it to a HasPhoneNumber
    name: 'Georgi',
    phone: 3598852229
  }
  : {
    // or a HasEmail
    name: 'Georgi',
    email: 'georgigeorgigeoegi@georgi.georgi'
  }

// Note: we can only access the .name propert (the shared intersection property)
contactInfo.email // Error: Property 'email' does not exist on type 'HasPhoneNumber | HasEmail'.
//        Property 'email' does not exist on type 'HasPhoneNumber'.

/**
 * (15) Union types
 */
let otherContactInfo: HasEmail & HasPhoneNumber = {
  // we must initialize with all properties required for HasEmail & HasPhoneNumber
  name: 'Georgi',
  phone: 123456678,
  email: 'georgi@georgi.georgi'
}

otherContactInfo.name // Note: We can access all of the properties
otherContactInfo.phone
otherContactInfo.email
