<?php
declare(strict_types=1);

// Typed models for the ProfanityFilter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Containsprofanity entity data model. */
class Containsprofanity
{
}

/** Match filter for Containsprofanity#load (any subset of Containsprofanity fields). */
class ContainsprofanityLoadMatch
{
}

/** Json entity data model. */
class Json
{
    public ?string $result = null;
}

/** Match filter for Json#load (any subset of Json fields). */
class JsonLoadMatch
{
    public ?string $result = null;
}

/** Plain entity data model. */
class Plain
{
}

/** Match filter for Plain#load (any subset of Plain fields). */
class PlainLoadMatch
{
}

/** Xml entity data model. */
class Xml
{
}

/** Match filter for Xml#load (any subset of Xml fields). */
class XmlLoadMatch
{
}

