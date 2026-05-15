# ProfanityFilter SDK utility: make_context
require_relative '../core/context'
module ProfanityFilterUtilities
  MakeContext = ->(ctxmap, basectx) {
    ProfanityFilterContext.new(ctxmap, basectx)
  }
end
