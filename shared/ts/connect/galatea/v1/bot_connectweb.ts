// @generated by protoc-gen-connect-web v0.7.0 with parameter "target=ts"
// @generated from file galatea/v1/bot.proto (package galatea.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BotAllRequest, BotAllResponse, BotCreateRequest, BotCreateResponse, BotDeleteRequest, BotDeleteResponse, BotUpdateRequest, BotUpdateResponse } from "./bot_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service galatea.v1.BotService
 */
export const BotService = {
  typeName: "galatea.v1.BotService",
  methods: {
    /**
     * @generated from rpc galatea.v1.BotService.BotAll
     */
    botAll: {
      name: "BotAll",
      I: BotAllRequest,
      O: BotAllResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc galatea.v1.BotService.BotCreate
     */
    botCreate: {
      name: "BotCreate",
      I: BotCreateRequest,
      O: BotCreateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc galatea.v1.BotService.BotUpdate
     */
    botUpdate: {
      name: "BotUpdate",
      I: BotUpdateRequest,
      O: BotUpdateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc galatea.v1.BotService.BotDelete
     */
    botDelete: {
      name: "BotDelete",
      I: BotDeleteRequest,
      O: BotDeleteResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

