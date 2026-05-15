<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: result_headers

class ProfanityFilterResultHeaders
{
    public static function call(ProfanityFilterContext $ctx): ?ProfanityFilterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
