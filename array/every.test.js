import { expect } from '../test/utils.js'

export const testEvery = () => {
    const testResults = []
    expect(testResults, [3, 6, 12, 90, 333, 420].every((elem) => {
        return elem % 3 === 0
    }), true)
    expect(testResults, [31, 60, 12, 90, 333, 420].every((elem) => elem >= 12), true)
    expect(testResults, [31, 60, 12, 90, 333, 420].every((elem) => {
        return (elem + elem) >= 20   
    }), true)

    const primalArray = [3, 6, 12, 90, 333, 420]                                                                                                                                                                                                                                                                     
    expect(testResults, primalArray, [3, 6, 12, 90, 333, 420])


    return { 
        name: 'testEvery',
        results: testResults
    }
}