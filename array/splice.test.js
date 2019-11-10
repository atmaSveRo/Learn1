import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testSplice = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5, 6].splice(0, 2), [1, 2])
    expectEqual(testResults, [1, 2, 3, 4, 5, 6].splice(3, 1, 7, 8, 9), [4])
    expectEqual(testResults, [].splice(3, 1), [])

    const primalArray = [1, 2, 3]
    const newArray = primalArray.splice(2, 0, 4)
    expectNotEqual(testResults, primalArray, [1, 2, 3])

    return {
        name: 'testSplice',
        results: testResults
    }

}