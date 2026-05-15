<?php
declare(strict_types=1);

// ProfanityFilter SDK base feature

class ProfanityFilterBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ProfanityFilterContext $ctx, array $options): void {}
    public function PostConstruct(ProfanityFilterContext $ctx): void {}
    public function PostConstructEntity(ProfanityFilterContext $ctx): void {}
    public function SetData(ProfanityFilterContext $ctx): void {}
    public function GetData(ProfanityFilterContext $ctx): void {}
    public function GetMatch(ProfanityFilterContext $ctx): void {}
    public function SetMatch(ProfanityFilterContext $ctx): void {}
    public function PrePoint(ProfanityFilterContext $ctx): void {}
    public function PreSpec(ProfanityFilterContext $ctx): void {}
    public function PreRequest(ProfanityFilterContext $ctx): void {}
    public function PreResponse(ProfanityFilterContext $ctx): void {}
    public function PreResult(ProfanityFilterContext $ctx): void {}
    public function PreDone(ProfanityFilterContext $ctx): void {}
    public function PreUnexpected(ProfanityFilterContext $ctx): void {}
}
