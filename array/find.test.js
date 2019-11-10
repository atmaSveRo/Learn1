import { expectEqual } from '../test/utils_equals.js'

export const testFind = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].find(elem => elem % 2 === 1), 1)

    expectEqual(testResults, [4, 5, 6, 8, 11].find((elem) => {
        let start = 2
        while (start <= Math.sqrt(elem)) {
            if (elem % start++ < 1) {
                return false
            }
        }
        return elem > 1
    }), 5)

    expectEqual(testResults, [4, 6, 8, 10].find((elem) => {
        let start = 2
        while (start <= Math.sqrt(elem)) {
            if (elem % start++ < 1) {
                return false
            }
        }
        return elem > 1
    }), undefined)

    return {
        name: 'testFind',
        results: testResults
    }


}