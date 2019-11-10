import { expectEqual } from '../test/utils_equals.js'

export const testIncludes = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].includes(5), true)
    expectEqual(testResults, [1, 2, 3, 4, 5].includes(5, 100), false)
    expectEqual(testResults, [1, 2, 3, 4, 5].includes(5, -100), true)
    expectEqual(testResults, [1, 2, 3, 4, 5].includes(6), false)

    return {
        name: 'testIncludes',
        results: testResults
    }


}