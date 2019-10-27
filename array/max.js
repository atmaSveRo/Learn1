export const max = (array) => {
    if (array.length === 0) {
        return null
    }
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        const element = array[i]
        if (element > maxElement) {
            maxElement = element
        }
    }
    return maxElement
}