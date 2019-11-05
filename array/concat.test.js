import { expect } from '../test/utils.js'
import { test } from './utils.test.js'

export const testConcat = () => {
    const testResults = []
    expect(testResults, [1, 2, 3].concat([4, 5, 6]), [1, 2, 3, 4, 5, 6])
    expect(testResults, [].concat([]), [])
    expect(testResults, ['JS', 'реально', 'крутой', 'язык'].concat('но', ['придётся'], 'попыхтеть'), ['JS', 'реально', 'крутой', 'язык', 'но', 'придётся', 'попыхтеть'])

    return {
        name: 'testConcat',
        results: testResults
    }


    
}