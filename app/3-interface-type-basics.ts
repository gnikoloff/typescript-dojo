import { HasEmail, HasPhoneNumber } from "./1-variables"

//== Type Alias ==//
/**
 * (1) Type aliases allow us to give a type a name
 */
type StringOrNumber = string | number

let x: string | number
let y: StringOrNumber

// This will compile to no JS at all
type HasName = { name: string }

type NumVal = 1 | 2 | 3 | 4 | NumArr
type NumArr = NumVal[]

//== Interface ==//
/**
 * (2) Interfaces can extend from other interfaces
 */
export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string
}

/**
 * (3) interfaces can be used to describe call signatures
 */
interface ContsctMessener1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void
}

type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string,
) => void

const emailer: ContsctMessener1 = (_contact, _message) => {

}

interface PhoneNumberDict {
  [numberName: string]: undefined | {
    areaCode: number,
    num: number
  }
}
