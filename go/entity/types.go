// Typed models for the ProfanityFilter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Containsprofanity is the typed data model for the containsprofanity entity.
type Containsprofanity struct {
}

// ContainsprofanityLoadMatch is the typed request payload for Containsprofanity.LoadTyped.
type ContainsprofanityLoadMatch struct {
}

// Json is the typed data model for the json entity.
type Json struct {
	Result *string `json:"result,omitempty"`
}

// JsonLoadMatch is the typed request payload for Json.LoadTyped.
type JsonLoadMatch struct {
	Result *string `json:"result,omitempty"`
}

// Plain is the typed data model for the plain entity.
type Plain struct {
}

// PlainLoadMatch is the typed request payload for Plain.LoadTyped.
type PlainLoadMatch struct {
}

// Xml is the typed data model for the xml entity.
type Xml struct {
}

// XmlLoadMatch is the typed request payload for Xml.LoadTyped.
type XmlLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
