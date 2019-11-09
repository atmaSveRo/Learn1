import  { expectEqual } from '../test/utils_equals.js'
import  { mul } from './mul.js'

export const testMul = () => {
    const testResults = []
    expectEqual(testResults, mul([2, 4, 6]), 48)
    expectEqual(testResults, mul([16, 14, 12]), 2688)
    expectEqual(testResults, mul([]), 1)

    return {
        name: 'testMul',
        results: testResults
    }
}