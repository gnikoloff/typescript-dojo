import { HasEmail, HasPhoneNumber } from "./1-variables";

/**
 * (1) Function arguments and return values can have type annotations
 */
function sendEmail(to: HasEmail): { recipient: string, body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: 'Lorem ipsum dolar sit amet',
  }
}

// (2) or the arrow function variant
const sendTextMessage = (to: HasPhoneNumber): { recipient: string, body: string } => ({
  recipient: `${to.name} <${to.phone}>`,
  body: 'Lorem ipsum dolar sit amet',
})

// (3) return types can almost always be inferred 
function getNameParts(contact: { name: string }) {
  const parts = contact.name.split(/\s/g) // split @ whitespace
  if (parts.length < 2) {
    return {
      name: parts[0]
    }
  }
  return {
    first: parts[0],
    middle:
      parts.length === 2
        ? undefined
        : // everything except first and last
        parts.slice(1, parts.length - 2).join(" "),
    last: parts[parts.length - 1]
  }
}

// (4) rest params work too. type must be array-ish
const sum = (...vals: number[]) => vals.reduce((acc, val) => acc + val, 0)
console.log(sum(1, 2, 3, 4, 5))

// (5) we can even provide multiple function signatures
// "overload signatures"
function contactPeople(method: 'email', ...people: HasEmail[]): void
function contactPeople(method: 'phone', ...people: HasPhoneNumber[]): void

// "function implementation"
function contactPeople(
  method: 'email' | 'phone',
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === 'email') {
    (people as HasEmail[]).forEach(sendEmail)
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage)
  }
}
contactPeople('email', { name: 'foo', email: 'bla@bla.bla' })
contactPeople('phone', { name: 'foo', phone: 8923423 })

// (6) the lexical scope (this) of a function is part of its signature
function sendMessage(
  this: HasEmail & HasPhoneNumber,
  preferredMethod: 'phone' | 'email'
) {
  if (preferredMethod === 'email') {
    console.log('sendEmail')
    sendEmail(this)
  } else {
    console.log('sendTextMessage')
    sendTextMessage(this)
  }
}

const c = { name: 'Georgi', phone: 23432432, email: 'a@b.c' }
function invokeSoon(cb: () => any, timeout: number) {
  setTimeout(() => cb.call(null), timeout)
}

// Error: 'this' is not satisfied
invokeSoon(() => sendMessage('email', 500))

// creating a bound function is one solution
const bound = sendMessage.bind(c, 'email')
invokeSoon(() => bound(), 500)

// call / apply works as well
invokeSoon(() => sendMessage.apply(c, ['phone']), 500)
