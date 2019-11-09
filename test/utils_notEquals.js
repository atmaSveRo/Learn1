import { isNotEqual } from '../utils/notEquals.js'

export const expectNotEqual = (testResults, actual, expected) => {
    if (isNotEqual(actual, expected)) {
        testResults.push("Missed")
    } else {
        testResults.push({
            actual: actual,
            expected: expected
        })
    }
}