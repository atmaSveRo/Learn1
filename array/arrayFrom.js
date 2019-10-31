/**
 * 
 * @param {Any} elem 
 * @param {function<any>} func
 * @param {Array<any>} 
 */

export const arrayFrom = (elem, func) => {
    const newElem = Array.from(elem, func)
    return newElem
}