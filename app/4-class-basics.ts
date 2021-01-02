import { HasEmail, HasPhoneNumber } from './1-variables'

//=== Classes ===//
/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * - They can "implement" interfaces
 */
export class Contact implements HasEmail {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.email = email
    this.name = name
  }
}

/**
 * (2) example (1) is too verbose. we can simplify it with PARAMETER PROPERTIES
 */

/**
 * (3) Access modifier keywords, ie "Who can access this thing?"
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */
class ParamPropContact implements HasEmail {
  constructor(
    public name: string,
    public email: string = 'no email'
  ) {

  }
}

/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact implements HasEmail, HasPhoneNumber {
  readonly protected age: number = 0
  private password: string
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {
    this.password = Math.round().toString()
  })
}
