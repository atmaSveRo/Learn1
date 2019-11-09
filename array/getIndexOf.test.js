import  { expectEqual } from '../test/utils_equals.js'
import  { getIndexOf } from './getIndexOf.js'

export const testGetIndexOf = () => {
    const testResults = []
    expectEqual(testResults, getIndexOf([4, 9, 16], 4), 0)
    expectEqual(testResults, getIndexOf([4, 9, 16], 9), 1)
    expectEqual(testResults, getIndexOf([], 16), null)

    return {
        name: 'testGetIndexOf',
        results: testResults
    }
}