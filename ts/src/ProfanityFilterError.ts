
import { Context } from './Context'


class ProfanityFilterError extends Error {

  isProfanityFilterError = true

  sdk = 'ProfanityFilter'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ProfanityFilterError
}

