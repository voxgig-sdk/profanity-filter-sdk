<?php
declare(strict_types=1);

// ProfanityFilter SDK exists test

require_once __DIR__ . '/../profanityfilter_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ProfanityFilterSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
