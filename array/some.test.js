import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testSome = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].some(elem => elem > 10), false)
    expectEqual(testResults, [].some(elem => elem == false), false)
    expectNotEqual(testResults, [45, 56, 21, 90].some(elem => elem < 10), true)

    return {
        name: 'testSome',
        results: testResults
    }

}