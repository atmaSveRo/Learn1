const isArrayEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        const elem1 = array1[i]
        const elem2 = array2[i]
        if (elem1 !== elem2) {
            return false
        }
    }
    return true
}

const isEqual = (val1, val2) => {
    if (Array.isArray(val1) && Array.isArray(val2)) {
        return isArrayEqual(val1, val2)
    } else {
        return val1 === val2
    }
}

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