import { isArrayEqual } from './isErrayEqual.js'

export const isEqual = (val1, val2) => {
    if (Array.isArray(val1) && Array.isArray(val2)) {
        return isArrayEqual(val1, val2)
    } else {
        return val1 === val2
    }
}