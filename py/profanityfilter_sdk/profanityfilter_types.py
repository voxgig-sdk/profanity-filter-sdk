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


class ContainsprofanityLoadMatch(TypedDict):
    pass


class Json(TypedDict, total=False):
    result: str


class JsonLoadMatch(TypedDict, total=False):
    result: str


class Plain(TypedDict):
    pass


class PlainLoadMatch(TypedDict):
    pass


class Xml(TypedDict):
    pass


class XmlLoadMatch(TypedDict):
    pass
