<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: prepare_body

class ProfanityFilterPrepareBody
{
    public static function call(ProfanityFilterContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
