import { expectEqual } from '../test/utils_equals.js'

export const testIndexOf = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].indexOf(4), 3)
    expectEqual(testResults, [1, 2, 3, 4, 5].indexOf(6), -1)
    expectEqual(testResults, ['a', 'b', 'a', 'c', 'a', 'd'].indexOf('a'), 0)


    return {
        name: 'testIndexOf',
        results: testResults
    }

}