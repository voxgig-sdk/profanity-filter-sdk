# ProfanityFilter SDK utility: feature_add
module ProfanityFilterUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
