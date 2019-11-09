import { expectEqual } from '../test/utils_equals.js'

export const testEvery = () => {
    const testResults = []
    expectEqual(testResults, [3, 6, 12, 90, 333, 420].every((elem) => {
        return elem % 3 === 0
    }), true)
    expectEqual(testResults, [31, 60, 12, 90, 333, 420].every((elem) => elem >= 12), true)
    expectEqual(testResults, [31, 60, 12, 90, 333, 420].every((elem) => {
        return (elem + elem) >= 20   
    }), true)

    const primalArray = [3, 6, 12, 90, 333, 420]                                                                                                                                                                                                                                                                     
    expectEqual(testResults, primalArray, [3, 6, 12, 90, 333, 420])


    return { 
        name: 'testEvery',
        results: testResults
    }
}