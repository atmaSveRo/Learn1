import { expect } from '../test/utils.js'

export const testEntries = () => {
    const testResults = []
    expect(testResults, (['a', 'b', 'c'].entries()).next().value, [[0, 'a'], [1, 'b'], [2, 'c']])

    return {
        name: 'testEntries',
        results: testResults
    }

}