import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IQuote } from '../shared/interfaces';

@Injectable()
export class DataService {
    baseUrl: string = 'https://localhost:44358/api/values/';

    constructor(private http: HttpClient) { }
    getQuotes(): Observable<IQuote[]> {
        const headerDisc = {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization':
                'bearer ' +
                '9qiqAeX0mvG3XpyyOH_X_LKSSG8S-0dh8QHTfbBQhNPTRrPUA4moenBqrtudpgtxnVpDCbXO9nE3lTEDKPlee2XumsErbRloXVXFADAxwXhecQ84miqW7ETn7kXL4YTtQ5PaBRcGT8uqIe8yM9PgEECFIx-YW1ChLGi2tWhtwJFQSeGLDg2Lw0ClQ2ltJyn-HSGPUnsuIcFLaPWOamGf26GFGaiXyYjBe9zb-FtcWM05qJLGRdzSg9w_OOVBndXUDATRIay3xxxa568cj86T15PNCTenvx74Z0EmeNVxEJjh2uFjuzx6ezJv2W3HuV1w4b2CE9ttGDzB09QVCHCspBV8i26uKeoy0R3wF0HdyWHhT0NXQMCe0BKkdghmFge6htmGuN0U6-GPdkLW564tYi1F4bsQFW2SEPgeAIiocnP_optzjdkE-Da9thDa3zZqEgtw4VDLaLJPYgDlyViPUN2-zWAxvgSbVT-YNCRffS9FP67PBwfnudfjNxbun6JJ',
        };

        const requestOptions = {
            headers: new HttpHeaders(headerDisc),
        };
        return this.http
            .get<IQuote[]>(this.baseUrl, requestOptions)
            .pipe(            
                catchError((e) => {
                    throw 'error in source. Details:' + e;
                })
            );
    }

}
