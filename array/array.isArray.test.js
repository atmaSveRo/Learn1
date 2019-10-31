import { expect } from '../test/utils.js'
import { isArray } from './array.isArray.js'

export const testIsArray = () => {
    const testResults = []
    expect(testResults, isArray([1, 2, 3]), true)
    expect(testResults, isArray([]), true)
    expect(testResults, isArray([NaN, undefined, null]), true)

return {
    name: 'testIsArray',
    results: testResults
}
}