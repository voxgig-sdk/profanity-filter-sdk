# ProfanityFilter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ProfanityFilterFeatures
  def self.make_feature(name)
    case name
    when "base"
      ProfanityFilterBaseFeature.new
    when "test"
      ProfanityFilterTestFeature.new
    else
      ProfanityFilterBaseFeature.new
    end
  end
end
