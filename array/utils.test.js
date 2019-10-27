import { testMin } from  './min.test.js'
import { testMap } from './map.test.js'
import { testGetIndexOf } from './getIndexOf.test.js'
import { testSum } from './sum.test.js'


export const test = () => {
    console.log(testMin())
    console.log(testMap())
    console.log(testGetIndexOf())
    console.log(testSum())

}