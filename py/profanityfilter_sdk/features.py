# ProfanityFilter SDK feature factory

from profanityfilter_sdk.feature.base_feature import ProfanityFilterBaseFeature
from profanityfilter_sdk.feature.ratelimit_feature import ProfanityFilterRatelimitFeature
from profanityfilter_sdk.feature.retry_feature import ProfanityFilterRetryFeature
from profanityfilter_sdk.feature.test_feature import ProfanityFilterTestFeature
from profanityfilter_sdk.feature.timeout_feature import ProfanityFilterTimeoutFeature


_FEATURES = {
    "base": lambda: ProfanityFilterBaseFeature(),
    "ratelimit": lambda: ProfanityFilterRatelimitFeature(),
    "retry": lambda: ProfanityFilterRetryFeature(),
    "test": lambda: ProfanityFilterTestFeature(),
    "timeout": lambda: ProfanityFilterTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
