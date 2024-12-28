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
    this.GetJson('Ourpackage/domiciliarycare.json').subscribe({
      next: (data) => { this.our_packages = data },
      error: (error) => console.error('Error:', error),
    })
  }

  GetPackagesData() {
    return this.our_packages;
  }

  private GetJson(dataJson: string): Observable<any> {
    return this.http.get<any>(`assets/JSONDATA/${dataJson}`);
  }
}
