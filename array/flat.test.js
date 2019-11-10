import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testFlat = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, [3, 4]].flat(), [1, 2, 3, 4])
    expectEqual(testResults, [1, 2, [3, 4, [5, 6]]].flat(2), [1, 2, 3, 4, 5, 6])
    expectEqual(testResults, [[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]].flat(Infinity), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const primalArray = [1, 2, [3, 4]]
    const newArray = primalArray.flat()
    expectNotEqual(testResults, primalArray, [1, 2, [3, 4]])
    expectNotEqual(testResults, primalArray, newArray)

    return {
        name: 'testFlat',
        results: testResults
    }

}