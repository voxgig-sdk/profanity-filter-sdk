// Typed models for the ProfanityFilter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Containsprofanity {
}

export interface ContainsprofanityLoadMatch {
  add?: string
  text: string
}

export interface Json {
  result?: string
}

export interface JsonLoadMatch {
  add?: string
  fill_char?: string
  fill_text?: string
  text: string
}

export interface Plain {
}

export interface PlainLoadMatch {
  add?: string
  fill_char?: string
  fill_text?: string
  text: string
}

export interface Xml {
}

export interface XmlLoadMatch {
  add?: string
  fill_char?: string
  fill_text?: string
  text: string
}

