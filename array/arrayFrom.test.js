import { expectEqual } from '../test/utils_equals.js'
import { arrayFrom } from './arrayFrom.js'

export const testArrayFrom = () => {
    const testResults = []
    expectEqual(testResults, arrayFrom('foo'), ['f', 'o', 'o'])
    expectEqual(testResults, arrayFrom([1, 2, 3], (e) => {
        return e**e
    }), [1, 4, 27])
    expectEqual(testResults, arrayFrom([0]), [0])
    expectEqual(testResults, [1, 2].sort(), [1, 2])
  

    return {
        name: 'testArrayFrom',
        results: testResults
    }
}