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

/** Request payload for Containsprofanity#load. */
class ContainsprofanityLoadMatch
{
    public ?string $add = null;
    public string $text;
}

/** Json entity data model. */
class Json
{
    public ?string $result = null;
}

/** Request payload for Json#load. */
class JsonLoadMatch
{
    public ?string $add = null;
    public ?string $fill_char = null;
    public ?string $fill_text = null;
    public string $text;
}

/** Plain entity data model. */
class Plain
{
}

/** Request payload for Plain#load. */
class PlainLoadMatch
{
    public ?string $add = null;
    public ?string $fill_char = null;
    public ?string $fill_text = null;
    public string $text;
}

/** Xml entity data model. */
class Xml
{
}

/** Request payload for Xml#load. */
class XmlLoadMatch
{
    public ?string $add = null;
    public ?string $fill_char = null;
    public ?string $fill_text = null;
    public string $text;
}

