import { expectEqual } from '../test/utils_equals.js'

export const testFlatMap = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4].flatMap(elem => elem*2), [2, 4, 6, 8])
    expectEqual(testResults, [1, 2, 3, 4].flatMap(elem => [[elem*2]]), [[2], [4], [6], [8]])
    expectEqual(testResults, ['i was here', '', 'JSSS'].flatMap(elem => elem.split(' ')), ['i', 'was', 'here', '', 'JSSS'])


    return {
        name: 'testFlatMap',
        results: testResults
    }


}