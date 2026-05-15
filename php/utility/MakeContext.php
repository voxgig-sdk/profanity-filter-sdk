<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ProfanityFilterMakeContext
{
    public static function call(array $ctxmap, ?ProfanityFilterContext $basectx): ProfanityFilterContext
    {
        return new ProfanityFilterContext($ctxmap, $basectx);
    }
}
