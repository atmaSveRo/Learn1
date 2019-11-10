import { expectEqual } from '../test/utils_equals.js'

export const testLastIndexOf = () => {
    const testResults = []
    expectEqual(testResults, [5, 2, 3, 4, 5].lastIndexOf(5), 4)
    expectEqual(testResults, [5, 2, 3, 4, 5].lastIndexOf(6), -1)
    expectEqual(testResults, [undefined, null, NaN].lastIndexOf(undefined), 0)

    return {
        name: 'testLastIndexOf',
        results: testResults
    }

}