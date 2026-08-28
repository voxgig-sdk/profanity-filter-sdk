# Typed models for the ProfanityFilter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Containsprofanity(TypedDict):
    pass


class ContainsprofanityLoadMatchRequired(TypedDict):
    text: str


class ContainsprofanityLoadMatch(ContainsprofanityLoadMatchRequired, total=False):
    add: str


class Json(TypedDict, total=False):
    result: str


class JsonLoadMatchRequired(TypedDict):
    text: str


class JsonLoadMatch(JsonLoadMatchRequired, total=False):
    add: str
    fill_char: str
    fill_text: str


class Plain(TypedDict):
    pass


class PlainLoadMatchRequired(TypedDict):
    text: str


class PlainLoadMatch(PlainLoadMatchRequired, total=False):
    add: str
    fill_char: str
    fill_text: str


class Xml(TypedDict):
    pass


class XmlLoadMatchRequired(TypedDict):
    text: str


class XmlLoadMatch(XmlLoadMatchRequired, total=False):
    add: str
    fill_char: str
    fill_text: str
