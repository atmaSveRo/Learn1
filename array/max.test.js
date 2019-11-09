import { expectEqual } from '../test/utils_equals.js'
import { max } from './max.js'

export const testMax = () => {
    const testResults = []
    expectEqual(testResults, max([2, 6, 1]), 6)
    expectEqual(testResults, max([45, 78, 111]), 111)
    expectEqual(testResults, max([]), null)

    return {
        name: 'testMax',
        results: testResults
    }
}