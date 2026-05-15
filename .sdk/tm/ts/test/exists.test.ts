
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ProfanityFilterSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ProfanityFilterSDK.test()
    equal(null !== testsdk, true)
  })

})
