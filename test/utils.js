import { isEqual } from '../utils/equals.js'

export const expect = (testResults, actual, expected) => {
    if (isEqual(actual, expected)) {
        testResults.push("Done")
    } else {
        testResults.push({
            actual: actual,
            expected: expected
        })
    }
}