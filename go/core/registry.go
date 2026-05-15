package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewContainsprofanityEntityFunc func(client *ProfanityFilterSDK, entopts map[string]any) ProfanityFilterEntity

var NewJsonEntityFunc func(client *ProfanityFilterSDK, entopts map[string]any) ProfanityFilterEntity

var NewPlainEntityFunc func(client *ProfanityFilterSDK, entopts map[string]any) ProfanityFilterEntity

var NewXmlEntityFunc func(client *ProfanityFilterSDK, entopts map[string]any) ProfanityFilterEntity

