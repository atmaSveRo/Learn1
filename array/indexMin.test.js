import { expect } from '../test/utils.js'
import { indexMin } from './indexMin.js'

export const testIndexMin  = () => {
    const testResults = []
    expect(testResults, indexMin([11, 5, 89]), 1)
    expect(testResults, indexMin([112, 577, 890]), 0)
    expect(testResults, indexMin([]), null)

    return {
        name: 'testIndexMin',
        results: testResults
    }

}