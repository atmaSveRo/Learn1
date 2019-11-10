import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testSort = () => {
    const testResults = []
    expectEqual(testResults, [2, 4, 1, 5, 3].sort((a, b) => a - b), [1, 2, 3, 4, 5])
    expectEqual(testResults, [1, 2, 11, 22, 111, 222].sort((a, b) => a - b), [1, 2, 11, 22, 111, 222])
    expectEqual(testResults, ['1', '2', '11', '22', '111', '222'].sort(), ['1', '11', '111', '2', '22', '222'])

    const primalArray = [2, 4, 1, 5, 3]
    const newArray = [2, 4, 1, 5, 3].sort((a, b) => a - b)
    expectNotEqual(testResults, primalArray, newArray)

    return {
        name: 'testSort',
        results: testResults
    }
}