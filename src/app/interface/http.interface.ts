import { Observable } from "rxjs";

export type httpObserve = 'events' | 'response';

export interface HttpParameter {
    key: string;
    value: any;
}
export interface HttpPayload {
    serverContext?: string;
    resource: string;
    method: HttpMethod
    pathParams?: HttpParameter[];
    queryParams?: HttpParameter[];
    headerParams?: HttpParameter[];
    body?: any;
    filterCriteria?: any;
    baseURl: string,
    isAuthTokenRequired?: boolean,
    encryptionRequired?: 'YES' | 'NO' | undefined
}

export declare interface CreateFn<T> {
    (): Observable<T>;
}

export declare interface ModifyFn<T> {
    (): Observable<T>;
}

export declare interface FindAllFn<T> {
    (): Observable<T>;
}

export declare interface FindByKeyFn<T> {
    (): Observable<T>;
}

export declare interface LookUpFn<T> {
    (): Observable<any>;
}

export declare interface GridTransformFn<T> {
    (payload: T): any
}

export declare interface LoadForm<T> {
    (): Observable<T>;
}

export declare interface PatchFn<T> {
    (): Observable<T>;
}
export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

export interface httpOption {
    headerParam: Map<string, any>;
    pathParam: Map<string, any>;
    querryParam: Map<string, any>;
}
