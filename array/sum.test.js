import  { expectEqual } from '../test/utils_equals.js'
import  { sum } from './sum.js'

export const testSum = () => {
    const testResults = []
    expectEqual(testResults, sum([2, 4, 6]), 12)
    expectEqual(testResults, sum([16, 14, 12]), 42)
    expectEqual(testResults, sum([]), 0)

    return {
        name: 'testSum',
        results: testResults
    }
}