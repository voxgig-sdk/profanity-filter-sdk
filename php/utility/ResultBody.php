<?php
declare(strict_types=1);

// ProfanityFilter SDK utility: result_body

class ProfanityFilterResultBody
{
    public static function call(ProfanityFilterContext $ctx): ?ProfanityFilterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
