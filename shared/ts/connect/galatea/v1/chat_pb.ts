// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file galatea/v1/chat.proto (package galatea.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from enum galatea.v1.SenderType
 */
export enum SenderType {
  /**
   * @generated from enum value: SENDER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SENDER_TYPE_USER = 1;
   */
  USER = 1,

  /**
   * @generated from enum value: SENDER_TYPE_BOT = 2;
   */
  BOT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(SenderType)
proto3.util.setEnumType(SenderType, "galatea.v1.SenderType", [
  { no: 0, name: "SENDER_TYPE_UNSPECIFIED" },
  { no: 1, name: "SENDER_TYPE_USER" },
  { no: 2, name: "SENDER_TYPE_BOT" },
]);

/**
 * @generated from message galatea.v1.ChatMessage
 */
export class ChatMessage extends Message<ChatMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: galatea.v1.SenderType sender = 2;
   */
  sender = SenderType.UNSPECIFIED;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  /**
   * @generated from field: int64 created_at = 4;
   */
  createdAt = protoInt64.zero;

  constructor(data?: PartialMessage<ChatMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sender", kind: "enum", T: proto3.getEnumType(SenderType) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessage {
    return new ChatMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessage {
    return new ChatMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessage {
    return new ChatMessage().fromJsonString(jsonString, options);
  }

  static equals(a: ChatMessage | PlainMessage<ChatMessage> | undefined, b: ChatMessage | PlainMessage<ChatMessage> | undefined): boolean {
    return proto3.util.equals(ChatMessage, a, b);
  }
}

/**
 * @generated from message galatea.v1.Chat
 */
export class Chat extends Message<Chat> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string user_id = 2;
   */
  userId = "";

  /**
   * @generated from field: string bot_id = 3;
   */
  botId = "";

  /**
   * @generated from field: repeated galatea.v1.ChatMessage messages = 4;
   */
  messages: ChatMessage[] = [];

  constructor(data?: PartialMessage<Chat>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.Chat";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "messages", kind: "message", T: ChatMessage, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Chat {
    return new Chat().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Chat {
    return new Chat().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Chat {
    return new Chat().fromJsonString(jsonString, options);
  }

  static equals(a: Chat | PlainMessage<Chat> | undefined, b: Chat | PlainMessage<Chat> | undefined): boolean {
    return proto3.util.equals(Chat, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatAllRequest
 */
export class ChatAllRequest extends Message<ChatAllRequest> {
  constructor(data?: PartialMessage<ChatAllRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatAllRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatAllRequest {
    return new ChatAllRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatAllRequest {
    return new ChatAllRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatAllRequest {
    return new ChatAllRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatAllRequest | PlainMessage<ChatAllRequest> | undefined, b: ChatAllRequest | PlainMessage<ChatAllRequest> | undefined): boolean {
    return proto3.util.equals(ChatAllRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatAllResponse
 */
export class ChatAllResponse extends Message<ChatAllResponse> {
  /**
   * @generated from field: repeated galatea.v1.Chat chats = 1;
   */
  chats: Chat[] = [];

  constructor(data?: PartialMessage<ChatAllResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatAllResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chats", kind: "message", T: Chat, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatAllResponse {
    return new ChatAllResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatAllResponse {
    return new ChatAllResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatAllResponse {
    return new ChatAllResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatAllResponse | PlainMessage<ChatAllResponse> | undefined, b: ChatAllResponse | PlainMessage<ChatAllResponse> | undefined): boolean {
    return proto3.util.equals(ChatAllResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatGetRequest
 */
export class ChatGetRequest extends Message<ChatGetRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<ChatGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatGetRequest {
    return new ChatGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatGetRequest {
    return new ChatGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatGetRequest {
    return new ChatGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatGetRequest | PlainMessage<ChatGetRequest> | undefined, b: ChatGetRequest | PlainMessage<ChatGetRequest> | undefined): boolean {
    return proto3.util.equals(ChatGetRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatGetResponse
 */
export class ChatGetResponse extends Message<ChatGetResponse> {
  /**
   * @generated from field: galatea.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<ChatGetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatGetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatGetResponse {
    return new ChatGetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatGetResponse {
    return new ChatGetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatGetResponse {
    return new ChatGetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatGetResponse | PlainMessage<ChatGetResponse> | undefined, b: ChatGetResponse | PlainMessage<ChatGetResponse> | undefined): boolean {
    return proto3.util.equals(ChatGetResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatCreateRequest
 */
export class ChatCreateRequest extends Message<ChatCreateRequest> {
  /**
   * @generated from field: string bot_id = 1;
   */
  botId = "";

  constructor(data?: PartialMessage<ChatCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCreateRequest {
    return new ChatCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCreateRequest {
    return new ChatCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCreateRequest {
    return new ChatCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCreateRequest | PlainMessage<ChatCreateRequest> | undefined, b: ChatCreateRequest | PlainMessage<ChatCreateRequest> | undefined): boolean {
    return proto3.util.equals(ChatCreateRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatCreateResponse
 */
export class ChatCreateResponse extends Message<ChatCreateResponse> {
  /**
   * @generated from field: galatea.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<ChatCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCreateResponse {
    return new ChatCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCreateResponse {
    return new ChatCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCreateResponse {
    return new ChatCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCreateResponse | PlainMessage<ChatCreateResponse> | undefined, b: ChatCreateResponse | PlainMessage<ChatCreateResponse> | undefined): boolean {
    return proto3.util.equals(ChatCreateResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatDeleteRequest
 */
export class ChatDeleteRequest extends Message<ChatDeleteRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<ChatDeleteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatDeleteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatDeleteRequest {
    return new ChatDeleteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatDeleteRequest {
    return new ChatDeleteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatDeleteRequest {
    return new ChatDeleteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatDeleteRequest | PlainMessage<ChatDeleteRequest> | undefined, b: ChatDeleteRequest | PlainMessage<ChatDeleteRequest> | undefined): boolean {
    return proto3.util.equals(ChatDeleteRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatDeleteResponse
 */
export class ChatDeleteResponse extends Message<ChatDeleteResponse> {
  /**
   * @generated from field: galatea.v1.Chat chat = 1;
   */
  chat?: Chat;

  constructor(data?: PartialMessage<ChatDeleteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatDeleteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat", kind: "message", T: Chat },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatDeleteResponse {
    return new ChatDeleteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatDeleteResponse {
    return new ChatDeleteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatDeleteResponse {
    return new ChatDeleteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatDeleteResponse | PlainMessage<ChatDeleteResponse> | undefined, b: ChatDeleteResponse | PlainMessage<ChatDeleteResponse> | undefined): boolean {
    return proto3.util.equals(ChatDeleteResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatSubscribeRequest
 */
export class ChatSubscribeRequest extends Message<ChatSubscribeRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<ChatSubscribeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatSubscribeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatSubscribeRequest {
    return new ChatSubscribeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatSubscribeRequest {
    return new ChatSubscribeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatSubscribeRequest {
    return new ChatSubscribeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatSubscribeRequest | PlainMessage<ChatSubscribeRequest> | undefined, b: ChatSubscribeRequest | PlainMessage<ChatSubscribeRequest> | undefined): boolean {
    return proto3.util.equals(ChatSubscribeRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatSubscribeResponse
 */
export class ChatSubscribeResponse extends Message<ChatSubscribeResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: galatea.v1.SenderType sender = 2;
   */
  sender = SenderType.UNSPECIFIED;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<ChatSubscribeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatSubscribeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sender", kind: "enum", T: proto3.getEnumType(SenderType) },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatSubscribeResponse {
    return new ChatSubscribeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatSubscribeResponse {
    return new ChatSubscribeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatSubscribeResponse {
    return new ChatSubscribeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatSubscribeResponse | PlainMessage<ChatSubscribeResponse> | undefined, b: ChatSubscribeResponse | PlainMessage<ChatSubscribeResponse> | undefined): boolean {
    return proto3.util.equals(ChatSubscribeResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatSendMessageRequest
 */
export class ChatSendMessageRequest extends Message<ChatSendMessageRequest> {
  /**
   * @generated from field: string chat_id = 1;
   */
  chatId = "";

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  constructor(data?: PartialMessage<ChatSendMessageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatSendMessageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chat_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatSendMessageRequest {
    return new ChatSendMessageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatSendMessageRequest {
    return new ChatSendMessageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatSendMessageRequest {
    return new ChatSendMessageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatSendMessageRequest | PlainMessage<ChatSendMessageRequest> | undefined, b: ChatSendMessageRequest | PlainMessage<ChatSendMessageRequest> | undefined): boolean {
    return proto3.util.equals(ChatSendMessageRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ChatSendMessageResponse
 */
export class ChatSendMessageResponse extends Message<ChatSendMessageResponse> {
  /**
   * @generated from field: galatea.v1.ChatMessage message = 1;
   */
  message?: ChatMessage;

  constructor(data?: PartialMessage<ChatSendMessageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ChatSendMessageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "message", T: ChatMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatSendMessageResponse {
    return new ChatSendMessageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatSendMessageResponse {
    return new ChatSendMessageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatSendMessageResponse {
    return new ChatSendMessageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatSendMessageResponse | PlainMessage<ChatSendMessageResponse> | undefined, b: ChatSendMessageResponse | PlainMessage<ChatSendMessageResponse> | undefined): boolean {
    return proto3.util.equals(ChatSendMessageResponse, a, b);
  }
}
