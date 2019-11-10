import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testReverse = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3].reverse(), [3, 2, 1])
    expectEqual(testResults, [undefined, null, NaN].reverse(), [NaN, null, undefined])
    expectEqual(testResults, ['i was here'].reverse(), ['i was here'])

    const primalArray = [1, 2, 3]
    const newArray = primalArray.reverse()
    expectNotEqual(testResults, primalArray, [1, 2, 3])

    return {
        name: 'testReverse',
        results: testResults
    }


}
