export enum ServerErrorCode {
  InvalidAPIToken = "1000",
  SubscriberIDNotFound = "1001",
  InstallationIDNotFound = "1002",
  StoreTypeNotFound = "1003",
  WrongStoreType = "1004",
  GenericError = "1005",
  InvalidAppID = "1006",
  Unauthorized = "1007",
  ProductIDNotFound = "1008",
  AppIDNotFound = "1009",
  InvalidParameter = "1010",
  AppleReceiptStatusError = "1011",
  InvalidFieldValueError = "1012",
  InvalidFieldNameError = "1013",
}

export enum ServerStatus {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServiceUnavailable = 503,
}

interface ResponseError {
  code: ServerErrorCode;
  description: string;
}

export interface BaseResponse {
  error?: ResponseError;
  status: ServerStatus;
}

export interface SimpleResponse extends BaseResponse {
  result: boolean;
}

export type GetLoginResponse = SimpleResponse;
