export const map = (array, handler) => {
    const results = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const result = handler(element, i, array)
        results.push(result)
    }

    return results
}