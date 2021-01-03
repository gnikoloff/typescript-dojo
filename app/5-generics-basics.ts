import { HasEmail } from './1-variables'

/**
 * (1) Generics allow us to parameterize types in the same way that function parameterize values
 */

// param determines the value of x
function wrappedValue(x) {
  return {
    value: x,
  }
}

