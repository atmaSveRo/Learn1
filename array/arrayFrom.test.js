import { expect } from '../test/utils.js'
import { arrayFrom } from './arrayFrom.js'

export const testArrayFrom = () => {
    const testResults = []
    expect(testResults, arrayFrom('foo'), ['f', 'o', 'o'])
    expect(testResults, arrayFrom([1, 2, 3], (e) => {
        return e**e
    }), [1, 4, 27])
    expect(testResults, arrayFrom([0]), [0])

    return {
        name: 'testArrayFrom',
        results: testResults
    }
}