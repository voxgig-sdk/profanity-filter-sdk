# ProfanityFilter SDK exists test

import pytest
from profanityfilter_sdk import ProfanityFilterSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ProfanityFilterSDK.test(None, None)
        assert testsdk is not None
