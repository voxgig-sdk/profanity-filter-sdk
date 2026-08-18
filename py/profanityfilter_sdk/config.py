# ProfanityFilter SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
                "parts": [
                  "service",
                  "containsprofanity",
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
                "parts": [
                  "service",
                  "json",
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
                "parts": [
                  "service",
                  "plain",
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
                "parts": [
                  "service",
                  "xml",
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
