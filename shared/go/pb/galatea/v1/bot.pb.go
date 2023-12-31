// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: galatea/v1/bot.proto

package galateav1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Bot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	AvatarUrl   string `protobuf:"bytes,4,opt,name=avatar_url,json=avatarUrl,proto3" json:"avatar_url,omitempty"`
}

func (x *Bot) Reset() {
	*x = Bot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Bot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Bot) ProtoMessage() {}

func (x *Bot) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Bot.ProtoReflect.Descriptor instead.
func (*Bot) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{0}
}

func (x *Bot) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Bot) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Bot) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Bot) GetAvatarUrl() string {
	if x != nil {
		return x.AvatarUrl
	}
	return ""
}

type BotAllRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *BotAllRequest) Reset() {
	*x = BotAllRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotAllRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotAllRequest) ProtoMessage() {}

func (x *BotAllRequest) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotAllRequest.ProtoReflect.Descriptor instead.
func (*BotAllRequest) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{1}
}

type BotAllResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bots []*Bot `protobuf:"bytes,1,rep,name=bots,proto3" json:"bots,omitempty"`
}

func (x *BotAllResponse) Reset() {
	*x = BotAllResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotAllResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotAllResponse) ProtoMessage() {}

func (x *BotAllResponse) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotAllResponse.ProtoReflect.Descriptor instead.
func (*BotAllResponse) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{2}
}

func (x *BotAllResponse) GetBots() []*Bot {
	if x != nil {
		return x.Bots
	}
	return nil
}

type BotCreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id  string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Bot *Bot   `protobuf:"bytes,2,opt,name=bot,proto3" json:"bot,omitempty"`
}

func (x *BotCreateRequest) Reset() {
	*x = BotCreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotCreateRequest) ProtoMessage() {}

func (x *BotCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotCreateRequest.ProtoReflect.Descriptor instead.
func (*BotCreateRequest) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{3}
}

func (x *BotCreateRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *BotCreateRequest) GetBot() *Bot {
	if x != nil {
		return x.Bot
	}
	return nil
}

type BotCreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bot *Bot `protobuf:"bytes,1,opt,name=bot,proto3" json:"bot,omitempty"`
}

func (x *BotCreateResponse) Reset() {
	*x = BotCreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotCreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotCreateResponse) ProtoMessage() {}

func (x *BotCreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotCreateResponse.ProtoReflect.Descriptor instead.
func (*BotCreateResponse) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{4}
}

func (x *BotCreateResponse) GetBot() *Bot {
	if x != nil {
		return x.Bot
	}
	return nil
}

type BotUpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id  string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Bot *Bot   `protobuf:"bytes,2,opt,name=bot,proto3" json:"bot,omitempty"`
}

func (x *BotUpdateRequest) Reset() {
	*x = BotUpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotUpdateRequest) ProtoMessage() {}

func (x *BotUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotUpdateRequest.ProtoReflect.Descriptor instead.
func (*BotUpdateRequest) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{5}
}

func (x *BotUpdateRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *BotUpdateRequest) GetBot() *Bot {
	if x != nil {
		return x.Bot
	}
	return nil
}

type BotUpdateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bot *Bot `protobuf:"bytes,1,opt,name=bot,proto3" json:"bot,omitempty"`
}

func (x *BotUpdateResponse) Reset() {
	*x = BotUpdateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotUpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotUpdateResponse) ProtoMessage() {}

func (x *BotUpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotUpdateResponse.ProtoReflect.Descriptor instead.
func (*BotUpdateResponse) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{6}
}

func (x *BotUpdateResponse) GetBot() *Bot {
	if x != nil {
		return x.Bot
	}
	return nil
}

type BotDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *BotDeleteRequest) Reset() {
	*x = BotDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotDeleteRequest) ProtoMessage() {}

func (x *BotDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotDeleteRequest.ProtoReflect.Descriptor instead.
func (*BotDeleteRequest) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{7}
}

func (x *BotDeleteRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type BotDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bot *Bot `protobuf:"bytes,2,opt,name=bot,proto3" json:"bot,omitempty"`
}

func (x *BotDeleteResponse) Reset() {
	*x = BotDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_galatea_v1_bot_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BotDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BotDeleteResponse) ProtoMessage() {}

func (x *BotDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_galatea_v1_bot_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BotDeleteResponse.ProtoReflect.Descriptor instead.
func (*BotDeleteResponse) Descriptor() ([]byte, []int) {
	return file_galatea_v1_bot_proto_rawDescGZIP(), []int{8}
}

func (x *BotDeleteResponse) GetBot() *Bot {
	if x != nil {
		return x.Bot
	}
	return nil
}

var File_galatea_v1_bot_proto protoreflect.FileDescriptor

var file_galatea_v1_bot_proto_rawDesc = []byte{
	0x0a, 0x14, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x6f, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e,
	0x76, 0x31, 0x22, 0x6a, 0x0a, 0x03, 0x42, 0x6f, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x1d, 0x0a, 0x0a, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x55, 0x72, 0x6c, 0x22, 0x0f,
	0x0a, 0x0d, 0x42, 0x6f, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22,
	0x35, 0x0a, 0x0e, 0x42, 0x6f, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x23, 0x0a, 0x04, 0x62, 0x6f, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x0f, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74,
	0x52, 0x04, 0x62, 0x6f, 0x74, 0x73, 0x22, 0x45, 0x0a, 0x10, 0x42, 0x6f, 0x74, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x21, 0x0a, 0x03, 0x62, 0x6f,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65,
	0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x52, 0x03, 0x62, 0x6f, 0x74, 0x22, 0x36, 0x0a,
	0x11, 0x42, 0x6f, 0x74, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x21, 0x0a, 0x03, 0x62, 0x6f, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0f, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74,
	0x52, 0x03, 0x62, 0x6f, 0x74, 0x22, 0x45, 0x0a, 0x10, 0x42, 0x6f, 0x74, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x21, 0x0a, 0x03, 0x62, 0x6f, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61,
	0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x52, 0x03, 0x62, 0x6f, 0x74, 0x22, 0x36, 0x0a, 0x11,
	0x42, 0x6f, 0x74, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x21, 0x0a, 0x03, 0x62, 0x6f, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f,
	0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x52,
	0x03, 0x62, 0x6f, 0x74, 0x22, 0x22, 0x0a, 0x10, 0x42, 0x6f, 0x74, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x36, 0x0a, 0x11, 0x42, 0x6f, 0x74, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21, 0x0a,
	0x03, 0x62, 0x6f, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x67, 0x61, 0x6c,
	0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x52, 0x03, 0x62, 0x6f, 0x74,
	0x32, 0xab, 0x02, 0x0a, 0x0a, 0x42, 0x6f, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x3f, 0x0a, 0x06, 0x42, 0x6f, 0x74, 0x41, 0x6c, 0x6c, 0x12, 0x19, 0x2e, 0x67, 0x61, 0x6c, 0x61,
	0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76,
	0x31, 0x2e, 0x42, 0x6f, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x48, 0x0a, 0x09, 0x42, 0x6f, 0x74, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x2e,
	0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x67, 0x61,
	0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x48, 0x0a, 0x09, 0x42, 0x6f,
	0x74, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x1c, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65,
	0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e,
	0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x48, 0x0a, 0x09, 0x42, 0x6f, 0x74, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x12, 0x1c, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42,
	0x6f, 0x74, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1d, 0x2e, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x6f, 0x74,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x23,
	0x5a, 0x21, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x70, 0x62, 0x2f, 0x67,
	0x61, 0x6c, 0x61, 0x74, 0x65, 0x61, 0x2f, 0x76, 0x31, 0x3b, 0x67, 0x61, 0x6c, 0x61, 0x74, 0x65,
	0x61, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_galatea_v1_bot_proto_rawDescOnce sync.Once
	file_galatea_v1_bot_proto_rawDescData = file_galatea_v1_bot_proto_rawDesc
)

func file_galatea_v1_bot_proto_rawDescGZIP() []byte {
	file_galatea_v1_bot_proto_rawDescOnce.Do(func() {
		file_galatea_v1_bot_proto_rawDescData = protoimpl.X.CompressGZIP(file_galatea_v1_bot_proto_rawDescData)
	})
	return file_galatea_v1_bot_proto_rawDescData
}

var file_galatea_v1_bot_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_galatea_v1_bot_proto_goTypes = []interface{}{
	(*Bot)(nil),               // 0: galatea.v1.Bot
	(*BotAllRequest)(nil),     // 1: galatea.v1.BotAllRequest
	(*BotAllResponse)(nil),    // 2: galatea.v1.BotAllResponse
	(*BotCreateRequest)(nil),  // 3: galatea.v1.BotCreateRequest
	(*BotCreateResponse)(nil), // 4: galatea.v1.BotCreateResponse
	(*BotUpdateRequest)(nil),  // 5: galatea.v1.BotUpdateRequest
	(*BotUpdateResponse)(nil), // 6: galatea.v1.BotUpdateResponse
	(*BotDeleteRequest)(nil),  // 7: galatea.v1.BotDeleteRequest
	(*BotDeleteResponse)(nil), // 8: galatea.v1.BotDeleteResponse
}
var file_galatea_v1_bot_proto_depIdxs = []int32{
	0,  // 0: galatea.v1.BotAllResponse.bots:type_name -> galatea.v1.Bot
	0,  // 1: galatea.v1.BotCreateRequest.bot:type_name -> galatea.v1.Bot
	0,  // 2: galatea.v1.BotCreateResponse.bot:type_name -> galatea.v1.Bot
	0,  // 3: galatea.v1.BotUpdateRequest.bot:type_name -> galatea.v1.Bot
	0,  // 4: galatea.v1.BotUpdateResponse.bot:type_name -> galatea.v1.Bot
	0,  // 5: galatea.v1.BotDeleteResponse.bot:type_name -> galatea.v1.Bot
	1,  // 6: galatea.v1.BotService.BotAll:input_type -> galatea.v1.BotAllRequest
	3,  // 7: galatea.v1.BotService.BotCreate:input_type -> galatea.v1.BotCreateRequest
	5,  // 8: galatea.v1.BotService.BotUpdate:input_type -> galatea.v1.BotUpdateRequest
	7,  // 9: galatea.v1.BotService.BotDelete:input_type -> galatea.v1.BotDeleteRequest
	2,  // 10: galatea.v1.BotService.BotAll:output_type -> galatea.v1.BotAllResponse
	4,  // 11: galatea.v1.BotService.BotCreate:output_type -> galatea.v1.BotCreateResponse
	6,  // 12: galatea.v1.BotService.BotUpdate:output_type -> galatea.v1.BotUpdateResponse
	8,  // 13: galatea.v1.BotService.BotDelete:output_type -> galatea.v1.BotDeleteResponse
	10, // [10:14] is the sub-list for method output_type
	6,  // [6:10] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_galatea_v1_bot_proto_init() }
func file_galatea_v1_bot_proto_init() {
	if File_galatea_v1_bot_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_galatea_v1_bot_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Bot); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotAllRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotAllResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotCreateRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotCreateResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotUpdateRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotUpdateResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotDeleteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_galatea_v1_bot_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BotDeleteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_galatea_v1_bot_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_galatea_v1_bot_proto_goTypes,
		DependencyIndexes: file_galatea_v1_bot_proto_depIdxs,
		MessageInfos:      file_galatea_v1_bot_proto_msgTypes,
	}.Build()
	File_galatea_v1_bot_proto = out.File
	file_galatea_v1_bot_proto_rawDesc = nil
	file_galatea_v1_bot_proto_goTypes = nil
	file_galatea_v1_bot_proto_depIdxs = nil
}
