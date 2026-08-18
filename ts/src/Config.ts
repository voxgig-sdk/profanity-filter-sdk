
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProfanityFilter',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
              "parts": [
                "service",
                "containsprofanity"
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
              }
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
              "parts": [
                "service",
                "json"
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
              }
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
              "parts": [
                "service",
                "plain"
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
              }
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
              "parts": [
                "service",
                "xml"
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
              }
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
  config
}

