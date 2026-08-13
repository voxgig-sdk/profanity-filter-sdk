# ProfanityFilter SDK utility: make_context

from projectname_sdk.core.context import ProfanityFilterContext


def make_context_util(ctxmap, basectx):
    return ProfanityFilterContext(ctxmap, basectx)
