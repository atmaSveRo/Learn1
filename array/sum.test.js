import  { expect } from '../test/utils.js'
import  { sum } from './sum.js'

export const testSum = () => {
    const testResults = []
    expect(testResults, sum([2, 4, 6]), 12)
    expect(testResults, sum([16, 14, 12]), 42)
    expect(testResults, sum([]), 0)

    return {
        name: 'testSum',
        results: testResults
    }
}