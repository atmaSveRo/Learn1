import { expectEqual } from '../test/utils_equals.js'
import {expectNotEqual } from '../test/utils_notEquals.js'

export const testSlice = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].slice(2), [3, 4, 5])
    expectEqual(testResults, [1, 2, 3, 4, 5].slice(2, 3), [3])
    expectEqual(testResults, [1, 2, 3, 4, 5].slice(0, -1), [1, 2, 3, 4])
    expectEqual(testResults, [].slice(2, 3), [])

    const primalArray = [1, 2, 3, 4, 5]
    const newArray = [1, 2, 3, 4, 5].slice(3)
    expectNotEqual(testResults, primalArray, newArray)

    return {
        name: 'testSlice',
        results: testResults
    }


}