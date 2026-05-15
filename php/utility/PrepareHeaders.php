<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: prepare_headers

class ProfanityFilterPrepareHeaders
{
    public static function call(ProfanityFilterContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
