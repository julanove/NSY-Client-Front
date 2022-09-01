export interface JSONRPCErrorType {
    errorCode: number;
    message: string;
}

export function instanceOfJSONRPCErrorType(object: any): object is JSONRPCErrorType {
    return 'errorCode' in object && 'message' in object;
}

export class ParseError extends Error implements JSONRPCErrorType {
    public errorCode = -32700;
    constructor(public message: string) {
        super("Parse error");
        this.name = "JSORPCErrorParseError";
    }
}

export class InvalidRequestError extends Error implements JSONRPCErrorType {
    public errorCode = -32600;
    constructor(public message: string) {
        super("Invalid Request");
        this.name = "JSORPCErrorInvalidRequest";
    }
}

export class MethodNotFoundError extends Error implements JSONRPCErrorType {
    public errorCode = -32601;
    constructor(public message: string) {
        super("Method not found");
        this.name = "JSORPCErrorMethodNotFound";
    }
}

export class InvalidParamsError extends Error implements JSONRPCErrorType {
    public errorCode = -32602;
    constructor(public message: string) {
        super("Invalid params");
        this.name = "JSORPCErrorInvalidParams";
    }
}

export class InternalError extends Error implements JSONRPCErrorType {
    public errorCode = -32603;
    constructor(public message: string) {
        super("Invalid params");
        this.name = "JSORPCErrorInternalError";
    }
}

export class ServerError extends Error implements JSONRPCErrorType {
    public errorCode = -32603;

    constructor(code: number, message: string) {
        super(message || "Server error");
        this.errorCode = code || -32603;
        this.name = "JSORPCErrorServerError";
    }
}

export const JSONRPCError = {
    instanceOfJSONRPCErrorType: instanceOfJSONRPCErrorType,
    ParseError: ParseError,
    InvalidRequestError: InvalidRequestError,
    MethodNotFoundError: MethodNotFoundError,
    InvalidParamsError: InvalidParamsError,
    InternalError: InternalError,
    ServerError: ServerError,
}