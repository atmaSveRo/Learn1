export const sum = (array) => {
    let sumResult = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        sumResult = sumResult + element
    }
    return sumResult
}