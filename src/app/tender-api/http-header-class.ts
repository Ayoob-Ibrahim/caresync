import { HttpMethod, httpObserve, HttpParameter, HttpPayload } from "../interface/http.interface";

export class HttpRequest {
    private _headerParameters?: HttpParameter[] = [];
    private _queryParameters?: HttpParameter[] = [];
    private _pathParameters?: HttpParameter[] = [];
    private _body?: any = null;
    private _criteriaQuery?: any;
    private _serverContext?: string | undefined = undefined;
    private _resource: string = '';
    private _method!: HttpMethod
    private _baseUrl: string = '';
    private _authTokenRequired: boolean = true;
    private _cachingRequired: boolean = false;
    private _aesEncryptionRequired: 'YES' | 'NO' | undefined;
    private _reportProgress: boolean = false;
    private _observe: httpObserve = 'response';
    public addHeaderParamter(key: string, value: unknown): void {
        this._headerParameters?.push({ key: key, value: value });
    }
    public addQueryParameter(key: string, value: unknown): void {
        this._queryParameters?.push({ key: key, value: value });
    }
    public addPathParameter(key: string, value: unknown): void {
        this._pathParameters?.push({ key: key, value: value });
    }
    public setCriteriaQuery(criteriaQuery: any): void {
        this._criteriaQuery = criteriaQuery.criteriaQuery();
        let querry = criteriaQuery.getAllQueryParam() || {}
        for (const key in querry) {
            this._queryParameters?.push({ key: key, value: querry[key] });
        };
        let path = criteriaQuery.getAllPathParam() || {};
        for (const key in path) {
            this._pathParameters?.push({ key: key, value: path[key] });
        }
    }
    public setBody(payload: unknown): void {
        this._body = payload;
    }
    public setResource(resourceUrl: string): void {
        this._resource = resourceUrl;
    }
    public setMethod(method: HttpMethod): void {
        this._method = method;
    }
    public setContextPath(serverContext: string): void {
        this._serverContext = serverContext;
    }

    public setBaseUrl(url: string): void {
        this._baseUrl = url;
    }

    public setAuthTokenRequired(isTokenRequired: boolean) {
        this._authTokenRequired = isTokenRequired;
    }

    public setCachingRequired(isCachingRequired: boolean) {
        this._cachingRequired = isCachingRequired;
    }

    public get hasCachingRequired(): boolean {
        return this._cachingRequired
    }

    get httpPayload(): HttpPayload {
        return {
            method: this._method,
            resource: this._resource,
            body: this._body,
            filterCriteria: this._criteriaQuery,
            pathParams: this._pathParameters,
            queryParams: this._queryParameters,
            headerParams: this._headerParameters,
            serverContext: this._serverContext,
            baseURl: this._baseUrl,
            isAuthTokenRequired: this._authTokenRequired,
            encryptionRequired: this._aesEncryptionRequired
        };
    }

    public aesEncryptionRequired(encryptionRequired: 'YES' | 'NO' | undefined) {
        this._aesEncryptionRequired = encryptionRequired
    }

    public setReportProgress(reporType: boolean): void {
        this._reportProgress = reporType;
    }

    public setObserveHandler(obsTyp: httpObserve) {
        this._observe = obsTyp;
    }

    public get hasReportProgress(): boolean {
        return this._reportProgress;
    }

    public get hasObserveHandler(): httpObserve {
        return this._observe;
    }
}
