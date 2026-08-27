package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ProfanityFilter",
			"slug": "profanity-filter",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.purgomalum.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"containsprofanity": map[string]any{},
				"json": map[string]any{},
				"plain": map[string]any{},
				"xml": map[string]any{},
			},
		},
		"entity": map[string]any{
			"containsprofanity": map[string]any{
				"fields": []any{},
				"name": "containsprofanity",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "add",
											"orig": "add",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/service/containsprofanity",
								"parts": []any{
									"service",
									"containsprofanity",
								},
								"select": map[string]any{
									"exist": []any{
										"add",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"json": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"short": "The filtered text with profanity removed or replaced",
						"type": "`$STRING`",
					},
				},
				"name": "json",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "add",
											"orig": "add",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_char",
											"orig": "fill_char",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_text",
											"orig": "fill_text",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/service/json",
								"parts": []any{
									"service",
									"json",
								},
								"select": map[string]any{
									"exist": []any{
										"add",
										"fill_char",
										"fill_text",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"plain": map[string]any{
				"fields": []any{},
				"name": "plain",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "add",
											"orig": "add",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_char",
											"orig": "fill_char",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_text",
											"orig": "fill_text",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/service/plain",
								"parts": []any{
									"service",
									"plain",
								},
								"select": map[string]any{
									"exist": []any{
										"add",
										"fill_char",
										"fill_text",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"xml": map[string]any{
				"fields": []any{},
				"name": "xml",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "add",
											"orig": "add",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_char",
											"orig": "fill_char",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "fill_text",
											"orig": "fill_text",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/service/xml",
								"parts": []any{
									"service",
									"xml",
								},
								"select": map[string]any{
									"exist": []any{
										"add",
										"fill_char",
										"fill_text",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
