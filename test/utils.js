import { isEqual } from './equal/isEqual.js'

export const expect = (testResults, expected, actual) => {
    if (isEqual(actual, expected)) {
        testResults.push("Done")
    } else {
        testResults.push({
            actual: actual,
            expected: expected
        })
    }
}