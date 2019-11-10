import { expectEqual } from '../test/utils_equals.js'
import { expectNotEqual } from '../test/utils_notEquals.js'

export const testFilter = () => {
    const testResults = []
    expectEqual(testResults, [10, 2, 30, 4, 50].filter( elem => elem >= 10 && elem <= 40), [10, 30])
    expectEqual(testResults, ['яблоко', 'апельсин', 'ананас', 'шоколад', 'фруктовый'].filter(elem => elem.length > 7), ['апельсин', 'фруктовый'])
    expectEqual(testResults, [1, 2, 3, 4, 5].filter(elem => elem**elem > 5), [3, 4, 5])

    const primalArray = [1, 2, 3, 4, 5]
    const newArray = primalArray.filter(elem => elem**elem > 5)
    expectNotEqual(testResults, primalArray, newArray)

    return {
        name: 'testFilter',
        results: testResults
    }

}