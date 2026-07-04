# Typed models for the ProfanityFilter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Containsprofanity:
    pass


@dataclass
class ContainsprofanityLoadMatch:
    pass


@dataclass
class Json:
    result: Optional[str] = None


@dataclass
class JsonLoadMatch:
    result: Optional[str] = None


@dataclass
class Plain:
    pass


@dataclass
class PlainLoadMatch:
    pass


@dataclass
class Xml:
    pass


@dataclass
class XmlLoadMatch:
    pass

