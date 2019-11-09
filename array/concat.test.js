import { expectEqual } from '../test/utils_equals.js'

export const testConcat = () => {
    const testResults = []
    expectEqual(testResults, [1, 2, 3].concat([4, 5, 6]), [1, 2, 3, 4, 5, 6])
    expectEqual(testResults, [].concat([]), [])
    expectEqual(testResults, ['JS', 'реально', 'крутой', 'язык'].concat('но', ['придётся'], 'попыхтеть'), ['JS', 'реально', 'крутой', 'язык', 'но', 'придётся', 'попыхтеть'])

    const primalArray1 = [1, 2, 3]
    expectEqual(testResults, primalArray1, [1, 2, 3])

    

    return {
        name: 'testConcat',
        results: testResults
    }


    
}