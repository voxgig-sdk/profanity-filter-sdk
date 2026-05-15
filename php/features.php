<?php
declare(strict_types=1);

// ProfanityFilter SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ProfanityFilterFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ProfanityFilterBaseFeature();
            case "test":
                return new ProfanityFilterTestFeature();
            default:
                return new ProfanityFilterBaseFeature();
        }
    }
}
