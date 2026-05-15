# ProfanityFilter SDK exists test

require "minitest/autorun"
require_relative "../ProfanityFilter_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ProfanityFilterSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
