export const isArrayEqual = (array1, array2) => {
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