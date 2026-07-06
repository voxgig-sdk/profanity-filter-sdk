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

# Request payload for Containsprofanity#load.
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

# Request payload for Json#load.
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

# Request payload for Plain#load.
class PlainLoadMatch
end

# Xml entity data model.
class Xml
end

# Request payload for Xml#load.
class XmlLoadMatch
end

