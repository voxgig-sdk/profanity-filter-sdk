# ProfanityFilter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ProfanityFilterFeatures
  def self.make_feature(name)
    case name
    when "base"
      ProfanityFilterBaseFeature.new
    when "ratelimit"
      ProfanityFilterRatelimitFeature.new
    when "retry"
      ProfanityFilterRetryFeature.new
    when "test"
      ProfanityFilterTestFeature.new
    when "timeout"
      ProfanityFilterTimeoutFeature.new
    else
      ProfanityFilterBaseFeature.new
    end
  end
end
