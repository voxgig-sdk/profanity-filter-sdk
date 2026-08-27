# ProfanityFilter SDK configuration

module ProfanityFilterConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ProfanityFilter",
        "slug" => "profanity-filter",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://www.purgomalum.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "containsprofanity" => {},
          "json" => {},
          "plain" => {},
          "xml" => {},
        },
      },
      "entity" => {
        "containsprofanity" => {
          "fields" => [],
          "name" => "containsprofanity",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "add",
                        "orig" => "add",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/service/containsprofanity",
                  "parts" => [
                    "service",
                    "containsprofanity",
                  ],
                  "select" => {
                    "exist" => [
                      "add",
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "json" => {
          "fields" => [
            {
              "name" => "result",
              "short" => "The filtered text with profanity removed or replaced",
              "type" => "`$STRING`",
            },
          ],
          "name" => "json",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "add",
                        "orig" => "add",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_char",
                        "orig" => "fill_char",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_text",
                        "orig" => "fill_text",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/service/json",
                  "parts" => [
                    "service",
                    "json",
                  ],
                  "select" => {
                    "exist" => [
                      "add",
                      "fill_char",
                      "fill_text",
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "plain" => {
          "fields" => [],
          "name" => "plain",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "add",
                        "orig" => "add",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_char",
                        "orig" => "fill_char",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_text",
                        "orig" => "fill_text",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/service/plain",
                  "parts" => [
                    "service",
                    "plain",
                  ],
                  "select" => {
                    "exist" => [
                      "add",
                      "fill_char",
                      "fill_text",
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "xml" => {
          "fields" => [],
          "name" => "xml",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "add",
                        "orig" => "add",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_char",
                        "orig" => "fill_char",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "fill_text",
                        "orig" => "fill_text",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/service/xml",
                  "parts" => [
                    "service",
                    "xml",
                  ],
                  "select" => {
                    "exist" => [
                      "add",
                      "fill_char",
                      "fill_text",
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ProfanityFilterFeatures.make_feature(name)
  end
end
