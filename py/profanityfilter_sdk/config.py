# ProfanityFilter SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ProfanityFilter",
            "slug": "profanity-filter",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.purgomalum.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "containsprofanity": {},
                "json": {},
                "plain": {},
                "xml": {},
            },
        },
        "entity": {
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/service/containsprofanity",
                "segments": [
                  {
                    "lit": "service",
                  },
                  {
                    "lit": "containsprofanity",
                  },
                ],
                "select": {
                  "exist": [
                    "add",
                    "text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "service",
                  "containsprofanity",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "json": {
        "fields": [
          {
            "name": "result",
            "short": "The filtered text with profanity removed or replaced",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_char",
                      "orig": "fill_char",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_text",
                      "orig": "fill_text",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/service/json",
                "segments": [
                  {
                    "lit": "service",
                  },
                  {
                    "lit": "json",
                  },
                ],
                "select": {
                  "exist": [
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "service",
                  "json",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_char",
                      "orig": "fill_char",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_text",
                      "orig": "fill_text",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/service/plain",
                "segments": [
                  {
                    "lit": "service",
                  },
                  {
                    "lit": "plain",
                  },
                ],
                "select": {
                  "exist": [
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "service",
                  "plain",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_char",
                      "orig": "fill_char",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "fill_text",
                      "orig": "fill_text",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "text",
                      "orig": "text",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/service/xml",
                "segments": [
                  {
                    "lit": "service",
                  },
                  {
                    "lit": "xml",
                  },
                ],
                "select": {
                  "exist": [
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "service",
                  "xml",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
