export const isNotEqual = (val1, val2) => {
    if (Array.isArray(val1) && Array.isArray(val2)) {
        return isArrayNotEqual(val1, val2)
    } else {
        return val1 !== val2
    }
}


export const isArrayNotEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return true
    }
    for (let i = 0; i < array1.length; i++) {
        const elem1 = array1[i] 
        const elem2 = array2[i]
        if (elem1 !== elem2) {
            return true
        }
    }
    return false
}