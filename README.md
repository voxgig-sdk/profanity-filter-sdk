# ProfanityFilter SDK

Filter profanity from arbitrary text via a simple REST call, with plain text, JSON, or XML responses

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Profanity Filter API

[PurgoMalum](https://www.purgomalum.com) is a simple, free, RESTful web service for filtering and removing profanity, obscenity, and other unwanted text from a string. It is maintained by an individual operator (Sam, admin@purgomalum.com) and is reachable at `https://www.purgomalum.com`.

The API exposes a single filtering operation under `/service/` with four response shapes:

- `/service/plain` — returns the filtered text as plain text
- `/service/json` — returns the filtered text wrapped in JSON
- `/service/xml` — returns the filtered text wrapped in XML
- `/service/containsprofanity` — returns a boolean indicating whether the input contains profanity

All endpoints accept the same query parameters: `text` (the input string, required), `add` (a comma-separated list of up to 10 extra words to block, max 200 characters), `fill_text` (a replacement phrase, max 20 characters), and `fill_char` (a single replacement character — one of `_`, `~`, `-`, `=`, `|`, or `*`).

The filter recognises common character substitutions (for example `@` for `a`) and applies a built-in whitelist of safe words (such as "class") to reduce false positives. Errors are returned as an `<error>` element instead of the usual result body. CORS is enabled, so the service can be called directly from browsers. No rate limits or authentication are documented.

## Try it

**TypeScript**
```bash
npm install profanity-filter
```

**Python**
```bash
pip install profanity-filter-sdk
```

**PHP**
```bash
composer require voxgig/profanity-filter-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/profanity-filter-sdk/go
```

**Ruby**
```bash
gem install profanity-filter-sdk
```

**Lua**
```bash
luarocks install profanity-filter-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ProfanityFilterSDK } from 'profanity-filter'

const client = new ProfanityFilterSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o profanity-filter-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "profanity-filter": {
      "command": "/abs/path/to/profanity-filter-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Containsprofanity** | Boolean profanity-detection endpoint at `/service/containsprofanity` — returns `true` or `false` for whether the supplied `text` contains profanity. | `/service/containsprofanity` |
| **Json** | JSON-formatted filter endpoint at `/service/json` — returns the filtered text wrapped in a JSON object. | `/service/json` |
| **Plain** | Plain-text filter endpoint at `/service/plain` — returns the filtered text as a raw string. | `/service/plain` |
| **Xml** | XML-formatted filter endpoint at `/service/xml` — returns the filtered text wrapped in an XML element. | `/service/xml` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from profanityfilter_sdk import ProfanityFilterSDK

client = ProfanityFilterSDK({})


# Load a specific containsprofanity
containsprofanity, err = client.Containsprofanity(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'profanityfilter_sdk.php';

$client = new ProfanityFilterSDK([]);


// Load a specific containsprofanity
[$containsprofanity, $err] = $client->Containsprofanity(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/profanity-filter-sdk/go"

client := sdk.NewProfanityFilterSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ProfanityFilter_sdk"

client = ProfanityFilterSDK.new({})


# Load a specific containsprofanity
containsprofanity, err = client.Containsprofanity(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("profanity-filter_sdk")

local client = sdk.new({})


-- Load a specific containsprofanity
local containsprofanity, err = client:Containsprofanity(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ProfanityFilterSDK.test()
const result = await client.Containsprofanity().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ProfanityFilterSDK.test(None, None)
result, err = client.Containsprofanity(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ProfanityFilterSDK::test(null, null);
[$result, $err] = $client->Containsprofanity(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Containsprofanity(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ProfanityFilterSDK.test(nil, nil)
result, err = client.Containsprofanity(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Containsprofanity(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Profanity Filter API

- Upstream: [https://www.purgomalum.com](https://www.purgomalum.com)

- Free to use; no API key or authentication required.
- No explicit licence or terms of use are published on the PurgoMalum homepage.
- No attribution requirement is documented.
- Operated as a courtesy service by the maintainer (admin@purgomalum.com) — availability is not guaranteed.

---

Generated from the Profanity Filter API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
