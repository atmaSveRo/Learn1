import  { expect } from '../test/utils.js'
import  { getIndexOf } from './getIndexOf.js'

export const testGetIndexOf = () => {
    const testResults = []
    expect(testResults, getIndexOf([4, 9, 16], 4), 0)
    expect(testResults, getIndexOf([4, 9, 16], 9), 1)
    expect(testResults, getIndexOf([], 16), null)

    return {
        name: 'testGetIndexOf',
        results: testResults
    }
}