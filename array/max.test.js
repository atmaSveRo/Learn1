import { expect } from '../test/utils.js'
import { max } from './max.js'

export const testMax = () => {
    const testResults = []
    expect(testResults, max([2, 6, 1]), 6)
    expect(testResults, max([45, 78, 111]), 111)
    expect(testResults, max([32, 11, 4]), 32)

    return {
        name: 'testMax',
        results: testResults
    }
}