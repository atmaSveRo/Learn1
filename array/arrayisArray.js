/**
 * @param {any} elem
 * @returns {Boolean} 
 */

export const isArray = (elem) => {
	if (Array.isArray(elem)) {
		return true

	} else {
		return false
	}
}