import  { expect } from '../test/utils.js'
import  { map } from './map.js'

export const testMap = () => {
    const testResults = []
    expect(testResults, map([4, 9, 16], Math.sqrt), [2, 3, 4])
    expect(testResults, map(5, toString()), '5')
    expect(testResults, map([11.576, 82.123, 8741.6546354], Math.floor), [11, 82, 8741])

    return {
        name: 'testMap',
        results: testResults
    }
}