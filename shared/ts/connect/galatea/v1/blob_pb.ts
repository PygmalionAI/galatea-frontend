// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file galatea/v1/blob.proto (package galatea.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message galatea.v1.ImageUploadRequest
 */
export class ImageUploadRequest extends Message<ImageUploadRequest> {
  /**
   * @generated from field: bytes image = 1;
   */
  image = new Uint8Array(0);

  constructor(data?: PartialMessage<ImageUploadRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ImageUploadRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "image", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageUploadRequest {
    return new ImageUploadRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageUploadRequest {
    return new ImageUploadRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageUploadRequest {
    return new ImageUploadRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ImageUploadRequest | PlainMessage<ImageUploadRequest> | undefined, b: ImageUploadRequest | PlainMessage<ImageUploadRequest> | undefined): boolean {
    return proto3.util.equals(ImageUploadRequest, a, b);
  }
}

/**
 * @generated from message galatea.v1.ImageUploadResponse
 */
export class ImageUploadResponse extends Message<ImageUploadResponse> {
  /**
   * @generated from field: string url = 1;
   */
  url = "";

  constructor(data?: PartialMessage<ImageUploadResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "galatea.v1.ImageUploadResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImageUploadResponse {
    return new ImageUploadResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImageUploadResponse {
    return new ImageUploadResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImageUploadResponse {
    return new ImageUploadResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ImageUploadResponse | PlainMessage<ImageUploadResponse> | undefined, b: ImageUploadResponse | PlainMessage<ImageUploadResponse> | undefined): boolean {
    return proto3.util.equals(ImageUploadResponse, a, b);
  }
}
