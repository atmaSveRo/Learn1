import  { expectEqual } from '../test/utils_equals.js'
import  { map } from './map.js'

export const testMap = () => {
    const testResults = []
    expectEqual(testResults, map([4, 9, 16], Math.sqrt), [2, 3, 4])
    expectEqual(testResults, map([1, 2, 3, 4], (elem) => {
        return elem.toString()
    }), ['1', '2', '3', '4'])
    expectEqual(testResults, map([11.576, 82.123, 8741.6546354], Math.floor), [11, 82, 8741])

    return {
        name: 'testMap',
        results: testResults
    }
}