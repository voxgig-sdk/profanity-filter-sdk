package core

type ProfanityFilterError struct {
	IsProfanityFilterError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewProfanityFilterError(code string, msg string, ctx *Context) *ProfanityFilterError {
	return &ProfanityFilterError{
		IsProfanityFilterError: true,
		Sdk:              "ProfanityFilter",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ProfanityFilterError) Error() string {
	return e.Msg
}
