import * as _ from 'lodash';
import { JSONRPCError, JSONRPCErrorType } from './error';

export class JSORPCV2Response {
  public jsonrpc: string = "2.0";
  constructor(public id: string | number | null, public result: any | null, public error: Error | JSONRPCErrorType | null) { }

  public toObject(): any {
    if (this.error) {
      return {
        id: this.id,
        error: {
          code: (this.error as any).errorCode || -32603,
          message: this.error.message || "Server error",
          storage: (<any>this.error).storage
        }
      };
    } else {
      return {
        id: this.id,
        result: this.result
      };
    }
  }

  public toString(): string {
    return JSON.stringify(this.toObject());
  }
}

export class JSORPCV2Request {
  public jsonrpc: string = "2.0";
  constructor(public id: string | number | null, public method: string | null, public params: any | null = null) { }

  public static validate(json: {jsonrpc: string, method: string, params?: any, id?: any}): JSORPCV2Request {
    if (!_.isObject(json)) {
      throw new JSONRPCError.ParseError("Item is not a object");
    }

    if (json.jsonrpc !== "2.0") {
      throw new JSONRPCError.InvalidRequestError("JSON RPC Version shoud be a 2.0");
    }

    if (_.isEmpty(json.method)) {
      throw new JSONRPCError.InvalidRequestError("method is required");
    }

    return new JSORPCV2Request(json.id || null, json.method, json.params);
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}

export class JSORPCV2BatchRequest {
  constructor(public items: JSORPCV2Request[], public errorItems: JSORPCV2Response[] = []) {}

  public static validate(json: any): JSORPCV2BatchRequest {
    if (_.isEmpty(json)) {
      throw new JSONRPCError.ParseError("Item is not a object");
    }

    const items: JSORPCV2Request[] = [];
    const errorItems: JSORPCV2Response[] = [];

    json.forEach((j: any) => {
      try {
        items.push(JSORPCV2Request.validate(j));
      } catch (error) {
        errorItems.push(new JSORPCV2Response(j.id, null, error));
      }
    });

    return new JSORPCV2BatchRequest(items, errorItems);
  }

  public toString(): string {
    return JSON.stringify(this.items);
  }
}

export interface JSONRPCRequestContainer {
  single?: JSORPCV2Request;
  batch?: JSORPCV2BatchRequest;
}

export function validate(json: any): JSONRPCRequestContainer {
  if (_.isArray(json)) {
    return { batch: JSORPCV2BatchRequest.validate(json) };
  } else {
    return { single: JSORPCV2Request.validate(json) };
  }
}