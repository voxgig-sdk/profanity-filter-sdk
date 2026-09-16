

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


describe('ContainsprofanityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PROFANITY_FILTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('PROFANITY_FILTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ProfanityFilterSDK.test()
    const ent = testsdk.Containsprofanity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PROFANITY_FILTER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'containsprofanity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"containsprofanity","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"add","orig":"add","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"text","orig":"text","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /service/containsprofanity","json":"{\"operationId\":\"containsProfanity\",\"parameters\":[{\"description\":\"Input text to be processed\",\"in\":\"query\",\"name\":\"text\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"A comma separated list of words to be added to the profanity list. Accepts up to 10 words (or 200 maximum characters in length).\",\"in\":\"query\",\"name\":\"add\",\"required\":false,\"schema\":{\"maxLength\":200,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"text/plain\":{\"examples\":{\"hasProfanity\":{\"value\":\"true\"},\"noProfanity\":{\"value\":\"false\"}},\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}}},\"description\":\"Successful response\"},\"400\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Bad request - invalid parameters\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/service/containsprofanity","segments":[{"lit":"service"},{"lit":"containsprofanity"}],"select":{"exist":["add","text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"containsprofanity","name__orig":"containsprofanity","Name":"Containsprofanity","name_":"containsprofanity","name-":"containsprofanity","NAME":"CONTAINSPROFANITY","index$":0}, {"active":true,"entity":"containsprofanity","key$":"BasicContainsprofanityFlow","kind":"basic","name":"BasicContainsprofanityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"containsprofanity_ref01","srcdatavar":"containsprofanity_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-containsprofanity_ref01"}}],"index$":0}]}, 'Containsprofanity')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let containsprofanity_ref01_data = Object.values(setup.data.existing.containsprofanity)[0] as any

    // LOAD
    const containsprofanity_ref01_ent = client.Containsprofanity()
    const containsprofanity_ref01_match_dt0: any = {}
    const containsprofanity_ref01_data_dt0 = (await containsprofanity_ref01_ent.load(containsprofanity_ref01_match_dt0)).data()
    assert(null != containsprofanity_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/containsprofanity/ContainsprofanityTestData.json')

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
    ['containsprofanity01','containsprofanity02','containsprofanity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PROFANITY_FILTER_TEST_CONTAINSPROFANITY_ENTID': idmap,
    'PROFANITY_FILTER_TEST_LIVE': 'FALSE',
    'PROFANITY_FILTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PROFANITY_FILTER_TEST_CONTAINSPROFANITY_ENTID']

  const live = 'TRUE' === env.PROFANITY_FILTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PROFANITY_FILTER_TEST_CONTAINSPROFANITY_ENTID']
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
  
