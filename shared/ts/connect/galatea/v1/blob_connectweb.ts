// @generated by protoc-gen-connect-web v0.7.0 with parameter "target=ts"
// @generated from file galatea/v1/blob.proto (package galatea.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ImageUploadRequest, ImageUploadResponse } from "./blob_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service galatea.v1.ImageUploadService
 */
export const ImageUploadService = {
  typeName: "galatea.v1.ImageUploadService",
  methods: {
    /**
     * @generated from rpc galatea.v1.ImageUploadService.ImageUpload
     */
    imageUpload: {
      name: "ImageUpload",
      I: ImageUploadRequest,
      O: ImageUploadResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

