

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ProfanityFilterSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PlainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PROFANITY_FILTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('PROFANITY_FILTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ProfanityFilterSDK.test()
    const ent = testsdk.Plain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PROFANITY_FILTER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'plain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"plain","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"add","orig":"add","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"fill_char","orig":"fill_char","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"fill_text","orig":"fill_text","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"text","orig":"text","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /service/plain","json":"{\"operationId\":\"filterProfanityPlain\",\"parameters\":[{\"description\":\"Input text to be processed\",\"in\":\"query\",\"name\":\"text\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"A comma separated list of words to be added to the profanity list. Accepts up to 10 words (or 200 maximum characters in length).\",\"in\":\"query\",\"name\":\"add\",\"required\":false,\"schema\":{\"maxLength\":200,\"type\":\"string\"}},{\"description\":\"Text used to replace any words matching the profanity list. Maximum length of 20 characters. When not used, the default is an asterisk (*) fill.\",\"in\":\"query\",\"name\":\"fill_text\",\"required\":false,\"schema\":{\"maxLength\":20,\"type\":\"string\"}},{\"description\":\"Single character used to replace any words matching the profanity list. Fills designated character to length of word replaced. Accepts underscore (_) tilde (~), dash/hyphen (-), equal sign (=), pipe (|) and asterisk (*). When not used, the default is an asterisk (*) fill.\",\"in\":\"query\",\"name\":\"fill_char\",\"required\":false,\"schema\":{\"enum\":[\"_\",\"~\",\"-\",\"=\",\"|\",\"*\"],\"maxLength\":1,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"examples\":{\"cleanText\":{\"value\":\"this is some test input\"},\"filteredText\":{\"value\":\"this is some test *****\"}},\"schema\":{\"description\":\"The filtered text with profanity removed or replaced\",\"type\":\"string\"}}},\"description\":\"Successful response with filtered text\"},\"400\":{\"content\":{\"text/plain\":{\"schema\":{\"description\":\"Error message\",\"type\":\"string\"}}},\"description\":\"Bad request - invalid parameters\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/service/plain","segments":[{"lit":"service"},{"lit":"plain"}],"select":{"exist":["add","fill_char","fill_text","text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"plain","name__orig":"plain","Name":"Plain","name_":"plain","name-":"plain","NAME":"PLAIN","index$":2}, {"active":true,"entity":"plain","key$":"BasicPlainFlow","kind":"basic","name":"BasicPlainFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"plain_ref01","srcdatavar":"plain_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-plain_ref01"}}],"index$":0}]}, 'Plain')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let plain_ref01_data = Object.values(setup.data.existing.plain)[0] as any

    // LOAD
    const plain_ref01_ent = client.Plain()
    const plain_ref01_match_dt0: any = {}
    const plain_ref01_data_dt0 = (await plain_ref01_ent.load(plain_ref01_match_dt0)).data()
    assert(null != plain_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/plain/PlainTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ProfanityFilterSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['plain01','plain02','plain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PROFANITY_FILTER_TEST_PLAIN_ENTID': idmap,
    'PROFANITY_FILTER_TEST_LIVE': 'FALSE',
    'PROFANITY_FILTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PROFANITY_FILTER_TEST_PLAIN_ENTID']

  const live = 'TRUE' === env.PROFANITY_FILTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PROFANITY_FILTER_TEST_PLAIN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ProfanityFilterSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PROFANITY_FILTER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
