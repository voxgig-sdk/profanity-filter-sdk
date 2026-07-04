# frozen_string_literal: true

# Typed models for the ProfanityFilter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Containsprofanity entity data model.
class Containsprofanity
end

# Match filter for Containsprofanity#load (any subset of Containsprofanity fields).
class ContainsprofanityLoadMatch
end

# Json entity data model.
#
# @!attribute [rw] result
#   @return [String, nil]
Json = Struct.new(
  :result,
  keyword_init: true
)

# Match filter for Json#load (any subset of Json fields).
#
# @!attribute [rw] result
#   @return [String, nil]
JsonLoadMatch = Struct.new(
  :result,
  keyword_init: true
)

# Plain entity data model.
class Plain
end

# Match filter for Plain#load (any subset of Plain fields).
class PlainLoadMatch
end

# Xml entity data model.
class Xml
end

# Match filter for Xml#load (any subset of Xml fields).
class XmlLoadMatch
end

