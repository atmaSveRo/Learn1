import { expectEqual } from '../test/utils_equals.js'

export const testCopyWithin = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].copyWithin(0, 3), [4, 5, 3, 4, 5])
    expectEqual(testResults, [].copyWithin(0, 1, 2), [])
    expectEqual(testResults, [55, 72, 105, 1228, 7, 78].copyWithin(4, 1, 4), [55, 72, 105, 1228, 72, 105])
    expectEqual(testResults, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].copyWithin(5, 3, 6), [1, 2, 3, 4, 5, 4, 5, 6, 9, 10 ])

    const primalArray = [1, 2, 3, 4, 5]
    const newArray = primalArray.copyWithin(0, 3)
    expectEqual(testResults, primalArray, newArray)

    return {
        name: 'testCopyWithin',
        results: testResults
    }

}