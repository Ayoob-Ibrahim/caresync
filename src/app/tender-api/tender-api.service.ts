import { inject, Injectable } from '@angular/core';
import { HttpRequest } from './http-header-class';
import { httpOption } from '../interface/http.interface';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenderApiService {
  private httpClient: HttpClient = inject(HttpClient);
  constructor() {
    // this.httpClient.get('https://caresynctender-backend.vercel.app/api/tender/retrieve/filters').subscribe();
  }

  intialFetch(body: any) {
    const httpRequest = new HttpRequest();
    httpRequest.setMethod('POST');
    httpRequest.setResource('/api/tender/retrieve');
    httpRequest.addHeaderParamter('Content-Type', 'application/json; charset=utf-8');
    httpRequest.setAuthTokenRequired(false);
    httpRequest.setBody(body);
    return this.apiInvoking(httpRequest);
  }


  FilterFetch() {
    const httpRequest = new HttpRequest();
    httpRequest.setMethod('GET');
    httpRequest.setResource('/api/tender/retrieve/filters');
    httpRequest.addHeaderParamter('Content-Type', 'application/json; charset=utf-8');
    return this.apiInvoking(httpRequest);
  }


  private apiInvoking(httpRequest: HttpRequest,
    httpOptions: Map<keyof httpOption, Map<string, any>> = new Map<keyof httpOption, Map<string, any>>()
  ): Observable<any> {

    let { body, method, resource } = httpRequest.httpPayload
    let httpOpts: { headers: HttpHeaders; observe: any } = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
      observe: httpRequest.hasObserveHandler
    };

    let requestURL = environment.baseUrl + resource;

    try {
      switch (method) {
        case 'POST':
          return this.httpClient
            .post<any>(requestURL, body, httpOpts)
            .pipe(
              map((res: any) => {
                if (res.type === HttpEventType.UploadProgress) {
                  let percentage = Math.round(100 * res.loaded / res.total);
                  return { ...res, percentage }
                } else return {
                  ...res,
                  body: res.body,
                };
              }),
              catchError((error: any) => {
                return throwError(() => {
                  return {
                    ...error,
                  };
                });
              })
            );
        case 'GET':
          return this.httpClient.get(requestURL, httpOpts).pipe(
            map((res: any) => {
              return {
                ...res,
                body: res.body,
              };
            }),
            catchError((error: any) => {
              return throwError(() => {
                return {
                  ...error,
                };
              });
            })
          );


        case 'PUT':
          return this.httpClient
            .put<any>(requestURL, body, httpOpts)
            .pipe(
              map((res: any) => {
                return {
                  ...res,
                  body: res.body,
                };
              }),
              catchError((error: any) => {
                return throwError(() => {
                  return {
                    ...error,
                  };
                });
              })
            );
        case 'DELETE':
          return this.httpClient.delete(requestURL, httpOpts).pipe(
            map((res: any) => {
              return {
                ...res,
                body: res.body,
              };
            }),
            catchError((error: any) => {
              return throwError(() => {
                return {
                  ...error,
                };
              });
            })
          );
        case 'PATCH':
          return this.httpClient
            .patch(requestURL, body, httpOpts)
            .pipe(
              map((res: any) => {
                return {
                  ...res,
                  body: res.body,
                };
              }),
              catchError((error: any) => {
                return throwError(() => {

                  return {
                    ...error,
                  };
                });
              })
            );
        default:
          return throwError(() => new Error('METHOD NOT DEFINED'));
      }
    } catch (error) {
      return throwError(() => new Error(error));
    }
  }

} import { environment } from '../../environment/environment.prod';

