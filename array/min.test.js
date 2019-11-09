import  { expectEqual } from '../test/utils_equals.js'
import  { min } from './min.js'

export const testMin = () => {
    const testResults = []
    expectEqual(testResults, min([2, 4, 6]), 2)
    expectEqual(testResults, min([6, 4, 2]), 2)
    expectEqual(testResults, min([]), null)

    return {
        name: 'testMin',
        results: testResults
    }
}