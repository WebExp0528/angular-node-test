export interface IBaseJsonResponse {
    status: number;
    message?: string;
    name?: string;
}

export interface IJsonResponseSuccess<T = any> extends IBaseJsonResponse {
    data?: T;
}