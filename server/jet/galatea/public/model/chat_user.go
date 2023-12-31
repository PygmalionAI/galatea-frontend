//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package model

import "errors"

type ChatUser string

const (
	ChatUser_User ChatUser = "user"
	ChatUser_Bot  ChatUser = "bot"
)

func (e *ChatUser) Scan(value interface{}) error {
	var enumValue string
	switch val := value.(type) {
	case string:
		enumValue = val
	case []byte:
		enumValue = string(val)
	default:
		return errors.New("jet: Invalid scan value for AllTypesEnum enum. Enum value has to be of type string or []byte")
	}

	switch enumValue {
	case "user":
		*e = ChatUser_User
	case "bot":
		*e = ChatUser_Bot
	default:
		return errors.New("jet: Invalid scan value '" + enumValue + "' for ChatUser enum")
	}

	return nil
}

func (e ChatUser) String() string {
	return string(e)
}
