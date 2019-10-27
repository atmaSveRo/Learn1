import  { expect } from '../test/utils.js'
import  { mul } from './mul.js'

export const testMul = () => {
    const testResults = []
    expect(testResults, mul([2, 4, 6]), 48)
    expect(testResults, mul([16, 14, 12]), 2688)
    expect(testResults, mul([]), 1)

    return {
        name: 'testMul',
        results: testResults
    }
}