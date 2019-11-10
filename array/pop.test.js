import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testPop = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4].pop(), 4)
    expectEqual(testResults, [].pop(), undefined)
    expectEqual(testResults, ['i was here'].pop(), 'i was here')

    const primalArray = [1, 2, 3, 4]
    const newArray = primalArray.pop()
    expectNotEqual(testResults, primalArray, [1, 2, 3, 4])



    return {
        name: 'testPop',
        results: testResults
    }

}