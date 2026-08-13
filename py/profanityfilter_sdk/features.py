# ProfanityFilter SDK feature factory

from profanityfilter_sdk.feature.base_feature import ProfanityFilterBaseFeature
from profanityfilter_sdk.feature.test_feature import ProfanityFilterTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ProfanityFilterBaseFeature(),
        "test": lambda: ProfanityFilterTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
