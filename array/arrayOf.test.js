import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testArrayOf = () => {
    const testResults = []
    expectEqual(testResults, Array.of(1, 2, 3), [1, 2, 3])
    expectEqual(testResults, Array.of(), [])
    expectEqual(testResults, Array.of('Света', 'рыжая', 'сосиска'), ['Света', 'рыжая', 'сосиска'])
    expectNotEqual(testResults, Array.of(), [])


    return {
        name: 'testArrayOf',
        results: testResults
    }


}