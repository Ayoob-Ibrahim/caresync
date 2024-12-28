import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private our_packages: any
  constructor(private http: HttpClient) { }


  setpackagesJson(): void {
    this.GetJson('Ourpackage/domiciliarycare.json').subscribe(res => {
      this.our_packages = res;
    })
  }

  GetPackagesData() {
    return this.our_packages;
  }

  private GetJson(dataJson: string): Observable<any> {
    return this.http.get<any>(`assets/JSONDATA/${dataJson}`);
  }
}
