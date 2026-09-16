
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ProfanityFilter',
        slug: "profanity-filter",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.purgomalum.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      containsprofanity: {
      },

      json: {
      },

      plain: {
      },

      xml: {
      },

    }
  }


  entity = {
    "containsprofanity": {
      "fields": [],
      "name": "containsprofanity",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "add",
                    "orig": "add",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/service/containsprofanity",
              "segments": [
                {
                  "lit": "service"
                },
                {
                  "lit": "containsprofanity"
                }
              ],
              "select": {
                "exist": [
                  "add",
                  "text"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "service",
                "containsprofanity"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "json": {
      "fields": [
        {
          "name": "result",
          "short": "The filtered text with profanity removed or replaced",
          "type": "`$STRING`"
        }
      ],
      "name": "json",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "add",
                    "orig": "add",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_char",
                    "orig": "fill_char",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_text",
                    "orig": "fill_text",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/service/json",
              "segments": [
                {
                  "lit": "service"
                },
                {
                  "lit": "json"
                }
              ],
              "select": {
                "exist": [
                  "add",
                  "fill_char",
                  "fill_text",
                  "text"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "service",
                "json"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "plain": {
      "fields": [],
      "name": "plain",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "add",
                    "orig": "add",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_char",
                    "orig": "fill_char",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_text",
                    "orig": "fill_text",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/service/plain",
              "segments": [
                {
                  "lit": "service"
                },
                {
                  "lit": "plain"
                }
              ],
              "select": {
                "exist": [
                  "add",
                  "fill_char",
                  "fill_text",
                  "text"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "service",
                "plain"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "xml": {
      "fields": [],
      "name": "xml",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "add",
                    "orig": "add",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_char",
                    "orig": "fill_char",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "fill_text",
                    "orig": "fill_text",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "text",
                    "orig": "text",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/service/xml",
              "segments": [
                {
                  "lit": "service"
                },
                {
                  "lit": "xml"
                }
              ],
              "select": {
                "exist": [
                  "add",
                  "fill_char",
                  "fill_text",
                  "text"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "service",
                "xml"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

