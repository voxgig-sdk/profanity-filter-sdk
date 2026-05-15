# ProfanityFilter SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ProfanityFilterUtility.registrar = ->(u) {
  u.clean = ProfanityFilterUtilities::Clean
  u.done = ProfanityFilterUtilities::Done
  u.make_error = ProfanityFilterUtilities::MakeError
  u.feature_add = ProfanityFilterUtilities::FeatureAdd
  u.feature_hook = ProfanityFilterUtilities::FeatureHook
  u.feature_init = ProfanityFilterUtilities::FeatureInit
  u.fetcher = ProfanityFilterUtilities::Fetcher
  u.make_fetch_def = ProfanityFilterUtilities::MakeFetchDef
  u.make_context = ProfanityFilterUtilities::MakeContext
  u.make_options = ProfanityFilterUtilities::MakeOptions
  u.make_request = ProfanityFilterUtilities::MakeRequest
  u.make_response = ProfanityFilterUtilities::MakeResponse
  u.make_result = ProfanityFilterUtilities::MakeResult
  u.make_point = ProfanityFilterUtilities::MakePoint
  u.make_spec = ProfanityFilterUtilities::MakeSpec
  u.make_url = ProfanityFilterUtilities::MakeUrl
  u.param = ProfanityFilterUtilities::Param
  u.prepare_auth = ProfanityFilterUtilities::PrepareAuth
  u.prepare_body = ProfanityFilterUtilities::PrepareBody
  u.prepare_headers = ProfanityFilterUtilities::PrepareHeaders
  u.prepare_method = ProfanityFilterUtilities::PrepareMethod
  u.prepare_params = ProfanityFilterUtilities::PrepareParams
  u.prepare_path = ProfanityFilterUtilities::PreparePath
  u.prepare_query = ProfanityFilterUtilities::PrepareQuery
  u.result_basic = ProfanityFilterUtilities::ResultBasic
  u.result_body = ProfanityFilterUtilities::ResultBody
  u.result_headers = ProfanityFilterUtilities::ResultHeaders
  u.transform_request = ProfanityFilterUtilities::TransformRequest
  u.transform_response = ProfanityFilterUtilities::TransformResponse
}
