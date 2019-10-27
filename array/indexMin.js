export const indexMin = (array) => {
    let minElem = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element < minElem) {
            minElem = element
            minIndex = i
        }
    }
    return minIndex

}