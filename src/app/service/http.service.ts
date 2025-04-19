import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private our_packages: any;
  private our_service: any;
  constructor(private http: HttpClient) { }


  setpackagesJson(): void {
    this.GetJson('Ourpackage/packagesdata.json').subscribe({
      next: (data) => { this.our_packages = data },
      error: (error) => console.error('Error:', error),
    })
  }

  setserviceJson(): void {
    this.GetJson('ourservice/serviceData.json').subscribe({
      next: (data) => { this.our_service = data; },
      error: (error) => console.error('Error:', error),
    })
  }

  GetPackagesData() {
    return this.our_packages;
  }


  GetServiceData() {
    return this.our_service;
  }

  private GetJson(dataJson: string): Observable<any> {
    return this.http.get<any>(`assets/JSONDATA/${dataJson}`);
  }


  public GuidanceData(): Observable<any> {
    return this.http.get<any>(`assets/JSONDATA/guidance/data.json`);
  }

  public apiBody(
    page: number = 1, desc: string = '',
    title: string[] = [], region: string[] = [], contract: string[] = []
  ): object {
    return {
      "page": page,
      "description": desc,
      "title": title,
      "regions": region,
      "contracts": contract
    }
  }


}
