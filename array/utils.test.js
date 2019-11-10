import { testMin } from  './min.test.js'
import { testMap } from './map.test.js'
import { testGetIndexOf } from './getIndexOf.test.js'
import { testSum } from './sum.test.js'
import { testMul } from './mul.test.js'
import { testMax } from './max.test.js'
import { testIndexMin } from './indexMin.test.js'
import { testIsArray } from './arrayisArray.test.js'
import { testArrayFrom } from './arrayFrom.test.js'
import { testArrayOf } from './arrayOf.test.js'
import { testConcat } from './concat.test.js'
import { testCopyWithin } from './copyWithin.test.js'
import { testEvery } from './every.test.js'
import { testSome } from './some.test.js'
import { testFilter } from './filter.test.js'
import { testJoin } from './join.test.js'
import { testFind } from './find.test.js'
import { testFindIndex } from './findIndex.test.js'
import { testIndexOf } from './indexOf.test.js'
import { testLastIndexOf } from './lastIndexOf.test.js'
import { testIncludes } from './includes.test.js'

export const test = () => {
    console.log(testMin())
    console.log(testMap())
    console.log(testGetIndexOf())
    console.log(testSum())
    console.log(testMul())
    console.log(testMax())
    console.log(testIndexMin())
    console.log(testIsArray())
    console.log(testArrayFrom())
    console.log(testArrayOf())
    console.log(testConcat())
    console.log(testCopyWithin())
    console.log(testEvery())
    console.log(testSome())
    console.log(testFilter())
    console.log(testJoin())
    console.log(testFind())
    console.log(testFindIndex())
    console.log(testIndexOf())
    console.log(testLastIndexOf())   
    console.log(testIncludes());
    
}
