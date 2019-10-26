import  { expect } from '../test/utils.js'
import  { min } from './min.js'

export const testMin = () => {
    const testResults = []
    expect(testResults, min([2, 4, 6]), 2)
    expect(testResults, min([6, 4, 2]), 2)
    expect(testResults, min([]), null)

    return {
        name: 'testMin',
        results: testResults
    }
}