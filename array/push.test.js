import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testPush = () => {
    const testResults = []
    expectEqual(testResults, [1, 2].push(3, 4), 4)
    expectEqual(testResults, [].push(), 0)
    expectEqual(testResults, [1, 'aaaa', [1, 2, 3]].push([1, 2, 3], 'a', 'b'), 6)

    const primalArray = [1, 2]
    const newArray = primalArray.push('a')
    expectNotEqual(testResults, primalArray, [1, 2])

    return {
        name: 'testPush',
        results: testResults
    }

}