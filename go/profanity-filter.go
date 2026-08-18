package voxgigprofanityfiltersdk

import (
	"github.com/voxgig-sdk/profanity-filter-sdk/go/core"
	"github.com/voxgig-sdk/profanity-filter-sdk/go/entity"
	"github.com/voxgig-sdk/profanity-filter-sdk/go/feature"
	_ "github.com/voxgig-sdk/profanity-filter-sdk/go/utility"
)

// Type aliases preserve external API.
type ProfanityFilterSDK = core.ProfanityFilterSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ProfanityFilterEntity = core.ProfanityFilterEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ProfanityFilterError = core.ProfanityFilterError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewContainsprofanityEntityFunc = func(client *core.ProfanityFilterSDK, entopts map[string]any) core.ProfanityFilterEntity {
		return entity.NewContainsprofanityEntity(client, entopts)
	}
	core.NewJsonEntityFunc = func(client *core.ProfanityFilterSDK, entopts map[string]any) core.ProfanityFilterEntity {
		return entity.NewJsonEntity(client, entopts)
	}
	core.NewPlainEntityFunc = func(client *core.ProfanityFilterSDK, entopts map[string]any) core.ProfanityFilterEntity {
		return entity.NewPlainEntity(client, entopts)
	}
	core.NewXmlEntityFunc = func(client *core.ProfanityFilterSDK, entopts map[string]any) core.ProfanityFilterEntity {
		return entity.NewXmlEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewProfanityFilterSDK = core.NewProfanityFilterSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewProfanityFilterSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ProfanityFilterSDK  { return NewProfanityFilterSDK(nil) }
func Test() *ProfanityFilterSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
