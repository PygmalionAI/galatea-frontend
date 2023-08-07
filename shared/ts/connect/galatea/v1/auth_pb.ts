// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file galatea/v1/auth.proto (package galatea.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message galatea.v1.SignInRequest
 */
export class SignInRequest extends Message<SignInRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<SignInRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.SignInRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInRequest {
    return new SignInRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInRequest {
    return new SignInRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignInRequest | PlainMessage<SignInRequest> | undefined, b: SignInRequest | PlainMessage<SignInRequest> | undefined): boolean {
    return proto3.util.equals(SignInRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.SignInResponse
 */
export class SignInResponse extends Message<SignInResponse> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: string token_type = 2;
   */
  tokenType = "";

  /**
   * @generated from field: int32 expires_in = 3;
   */
  expiresIn = 0;

  /**
   * @generated from field: int32 expires_at = 4;
   */
  expiresAt = 0;

  /**
   * @generated from field: string refresh_token = 5;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<SignInResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.SignInResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "expires_in", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "expires_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignInResponse {
    return new SignInResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignInResponse {
    return new SignInResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignInResponse | PlainMessage<SignInResponse> | undefined, b: SignInResponse | PlainMessage<SignInResponse> | undefined): boolean {
    return proto3.util.equals(SignInResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.SignUpRequest
 */
export class SignUpRequest extends Message<SignUpRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<SignUpRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.SignUpRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpRequest {
    return new SignUpRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpRequest {
    return new SignUpRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpRequest {
    return new SignUpRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SignUpRequest | PlainMessage<SignUpRequest> | undefined, b: SignUpRequest | PlainMessage<SignUpRequest> | undefined): boolean {
    return proto3.util.equals(SignUpRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.SignUpResponse
 */
export class SignUpResponse extends Message<SignUpResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string confirmation_sent_at = 3;
   */
  confirmationSentAt = "";

  constructor(data?: PartialMessage<SignUpResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.SignUpResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "confirmation_sent_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpResponse {
    return new SignUpResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpResponse {
    return new SignUpResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpResponse {
    return new SignUpResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SignUpResponse | PlainMessage<SignUpResponse> | undefined, b: SignUpResponse | PlainMessage<SignUpResponse> | undefined): boolean {
    return proto3.util.equals(SignUpResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.VerifyRequest
 */
export class VerifyRequest extends Message<VerifyRequest> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string token = 3;
   */
  token = "";

  constructor(data?: PartialMessage<VerifyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.VerifyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyRequest {
    return new VerifyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyRequest {
    return new VerifyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyRequest {
    return new VerifyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyRequest | PlainMessage<VerifyRequest> | undefined, b: VerifyRequest | PlainMessage<VerifyRequest> | undefined): boolean {
    return proto3.util.equals(VerifyRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.VerifyResponse
 */
export class VerifyResponse extends Message<VerifyResponse> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: string token_type = 2;
   */
  tokenType = "";

  /**
   * @generated from field: int32 expires_in = 3;
   */
  expiresIn = 0;

  /**
   * @generated from field: int32 expires_at = 4;
   */
  expiresAt = 0;

  /**
   * @generated from field: string refresh_token = 5;
   */
  refreshToken = "";

  constructor(data?: PartialMessage<VerifyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.VerifyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "expires_in", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "expires_at", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyResponse {
    return new VerifyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyResponse {
    return new VerifyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyResponse {
    return new VerifyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyResponse | PlainMessage<VerifyResponse> | undefined, b: VerifyResponse | PlainMessage<VerifyResponse> | undefined): boolean {
    return proto3.util.equals(VerifyResponse, a, b);
  }
}

/**
 * @generated from message galatea.v1.CheckRequest
 */
export class CheckRequest extends Message<CheckRequest> {
  constructor(data?: PartialMessage<CheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.CheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRequest {
    return new CheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRequest {
    return new CheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRequest {
    return new CheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CheckRequest | PlainMessage<CheckRequest> | undefined, b: CheckRequest | PlainMessage<CheckRequest> | undefined): boolean {
    return proto3.util.equals(CheckRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.CheckResponse
 */
export class CheckResponse extends Message<CheckResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  /**
   * @generated from field: string session_id = 3;
   */
  sessionId = "";

  constructor(data?: PartialMessage<CheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.CheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse {
    return new CheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse {
    return new CheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse {
    return new CheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CheckResponse | PlainMessage<CheckResponse> | undefined, b: CheckResponse | PlainMessage<CheckResponse> | undefined): boolean {
    return proto3.util.equals(CheckResponse, a, b);
  }
}

