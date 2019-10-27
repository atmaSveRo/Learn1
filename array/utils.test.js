import { testMin } from  './min.test.js'
import { testMap } from './map.test.js'
import { testGetIndexOf } from './getIndexOf.test.js'


export const test = () => {
    console.log(testMin())
    console.log(testMap())
    console.log(testGetIndexOf())
    
}