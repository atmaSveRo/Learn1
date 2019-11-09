import { expectEqual } from '../test/utils_equals.js'
import { indexMin } from './indexMin.js'

export const testIndexMin  = () => {
    const testResults = []
    expectEqual(testResults, indexMin([11, 5, 89]), 1)
    expectEqual(testResults, indexMin([112, 577, 890]), 0)
    expectEqual(testResults, indexMin([]), null)

    return {
        name: 'testIndexMin',
        results: testResults
    }

}