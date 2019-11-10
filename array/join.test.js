import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testJoin = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].join(' + '), '1 + 2 + 3 + 4 + 5')
    expectEqual(testResults, [null, undefined, NaN, 0].join(), ',,NaN,0')
    expectNotEqual(testResults, [1, 2, 3, 4, 5].join(''), '1,2,3,4,5')

    const primalArray = [1, 2, 3, 4, 5]
    const newArray = primalArray.join('')
    expectNotEqual(testResults, primalArray, newArray)


    return {
        name: 'testJoin',
        results: testResults
    }


}