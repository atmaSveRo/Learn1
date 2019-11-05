import { expect } from '../test/utils.js'

export const testArrayOf = () => {
    const testResults = []
    expect(testResults, Array.of(1, 2, 3), [1, 2, 3])
    expect(testResults, Array.of(), [])
    expect(testResults, Array.of('Света', 'рыжая', 'сосиска'), ['Света', 'рыжая', 'сосиска'])


    return {
        name: 'testArrayOf',
        results: testResults
    }


}