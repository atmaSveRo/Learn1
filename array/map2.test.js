import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testMap2 = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].map(elem => elem**2), [1, 4, 9, 16, 25])
    expectEqual(testResults, [4, 9, 16].map(Math.sqrt), [2, 3, 4])
    expectEqual(testResults, [1, 2, 3, 4, 5].map(elem => elem.toString()), ['1', '2', '3', '4', '5'])

    const primalArray = [1, 2, 3, 4, 5]
    const newArray = primalArray.map(Math.sqrt)
    expectNotEqual(testResults, primalArray, newArray)

    return {
        name: 'testMap2',
        results: testResults
    }


}