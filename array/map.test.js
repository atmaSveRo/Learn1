import  { expect } from '../test/utils.js'
import  { map } from './map.js'

export const testMap = () => {
    const testResults = []
    expect(testResults, map([4, 9, 16], Math.sqrt), [2, 3, 4])

    return {
        name: 'testMap',
        results: testResults
    }
}