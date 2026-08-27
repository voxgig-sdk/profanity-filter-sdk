-- ProfanityFilter SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ProfanityFilter",
      slug = "profanity-filter",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.purgomalum.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["containsprofanity"] = {},
        ["json"] = {},
        ["plain"] = {},
        ["xml"] = {},
      },
    },
    entity = {
      ["containsprofanity"] = {
        ["fields"] = {},
        ["name"] = "containsprofanity",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "add",
                      ["orig"] = "add",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/service/containsprofanity",
                ["parts"] = {
                  "service",
                  "containsprofanity",
                },
                ["select"] = {
                  ["exist"] = {
                    "add",
                    "text",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["json"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["short"] = "The filtered text with profanity removed or replaced",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "json",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "add",
                      ["orig"] = "add",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_char",
                      ["orig"] = "fill_char",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_text",
                      ["orig"] = "fill_text",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/service/json",
                ["parts"] = {
                  "service",
                  "json",
                },
                ["select"] = {
                  ["exist"] = {
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["plain"] = {
        ["fields"] = {},
        ["name"] = "plain",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "add",
                      ["orig"] = "add",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_char",
                      ["orig"] = "fill_char",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_text",
                      ["orig"] = "fill_text",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/service/plain",
                ["parts"] = {
                  "service",
                  "plain",
                },
                ["select"] = {
                  ["exist"] = {
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["xml"] = {
        ["fields"] = {},
        ["name"] = "xml",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "add",
                      ["orig"] = "add",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_char",
                      ["orig"] = "fill_char",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "fill_text",
                      ["orig"] = "fill_text",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/service/xml",
                ["parts"] = {
                  "service",
                  "xml",
                },
                ["select"] = {
                  ["exist"] = {
                    "add",
                    "fill_char",
                    "fill_text",
                    "text",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
