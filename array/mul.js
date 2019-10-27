export const mul = (array) => {
    let mulResult = 1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        mulResult = mulResult * element
    }
    return mulResult
}