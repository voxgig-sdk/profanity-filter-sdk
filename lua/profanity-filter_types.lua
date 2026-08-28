-- Typed models for the ProfanityFilter SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Containsprofanity

---@class ContainsprofanityLoadMatch
---@field add? string
---@field text string

---@class Json
---@field result? string

---@class JsonLoadMatch
---@field add? string
---@field fill_char? string
---@field fill_text? string
---@field text string

---@class Plain

---@class PlainLoadMatch
---@field add? string
---@field fill_char? string
---@field fill_text? string
---@field text string

---@class Xml

---@class XmlLoadMatch
---@field add? string
---@field fill_char? string
---@field fill_text? string
---@field text string

local M = {}

return M
