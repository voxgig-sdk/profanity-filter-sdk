<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: feature_add

class ProfanityFilterFeatureAdd
{
    public static function call(ProfanityFilterContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
