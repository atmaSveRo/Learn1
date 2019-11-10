import { expectEqual } from '../test/utils_equals.js'

export const testFindIndex = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3, 4, 5].findIndex(elem => elem === 1), 0)

    expectEqual(testResults, [4, 5, 6, 8, 11].findIndex((elem) => {
        let start = 2
        while (start <= Math.sqrt(elem)) {
            if (elem % start++ < 1) {
                return false
            }
        }
        return elem > 1
    }), 1)

    expectEqual(testResults, [4, 6, 8, 10].findIndex((elem) => {
        let start = 2
        while (start <= Math.sqrt(elem)) {
            if (elem % start++ < 1) {
                return false
            }
        }
        return elem > 1
    }), -1)

    return {
        name: 'testFindIndex',
        results: testResults
    }

}