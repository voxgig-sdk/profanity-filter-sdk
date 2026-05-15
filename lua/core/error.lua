-- ProfanityFilter SDK error

local ProfanityFilterError = {}
ProfanityFilterError.__index = ProfanityFilterError


function ProfanityFilterError.new(code, msg, ctx)
  local self = setmetatable({}, ProfanityFilterError)
  self.is_sdk_error = true
  self.sdk = "ProfanityFilter"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ProfanityFilterError:error()
  return self.msg
end


function ProfanityFilterError:__tostring()
  return self.msg
end


return ProfanityFilterError
