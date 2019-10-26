export const min = (array) => {
    if (array.length === 0) {
        return null
    }
    let minElement = array[0];
    for (let i = 1; i < array.length; i++) {
        const element = array[i]
        if (element < minElement) {
            minElement = element
        }
    }
    return minElement
}