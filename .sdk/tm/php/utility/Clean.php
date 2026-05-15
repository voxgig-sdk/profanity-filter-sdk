<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: clean

class ProfanityFilterClean
{
    public static function call(ProfanityFilterContext $ctx, mixed $val): mixed
    {
        return $val;
    }
}
