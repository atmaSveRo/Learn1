export const getIndexOf = (array, elementToFind) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if(element === elementToFind) {
            return i
        }
    }
    return null
}