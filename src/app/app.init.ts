import { forkJoin } from "rxjs";
import { HttpService } from "./service/http.service";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export function appInitializer_(
    appConfigService: HttpService,
): () => Promise<any> {
    const httpClient: HttpClient = inject(HttpClient);
    const packages: string = ".Ourpackage/packagesdata.json";
    const services: string = "ourservice/serviceData.json";
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            let noCatch = Math.floor(Math.random() * 999999);
            const $package = httpClient.get<any>(packages + "?noCatch=" + noCatch);
            const $service = httpClient.get<any>(services + "?noCatch=" + noCatch);

            forkJoin([$package, $service,]).subscribe({
                next: ([package_, service_]) => {
                    resolve(true)
                },
                error: (err: any) => {

                }
            });
        });
    };
}
