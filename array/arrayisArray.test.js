import { expectEqual } from '../test/utils_equals.js'
import { isArray } from './arrayisArray.js'

export const testIsArray = () => {
    const testResults = []
    expectEqual(testResults, isArray([1, 2, 3]), true)
    expectEqual(testResults, isArray([]), true)
    expectEqual(testResults, isArray([NaN, undefined, null]), true)

return {
    name: 'testIsArray',
    results: testResults
}
}