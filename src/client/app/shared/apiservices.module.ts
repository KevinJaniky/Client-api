import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const URL = 'http://localhost/api/wp-json/types';

@Injectable()
export class ApiService {
    url: string = 'http://localhost:80/api/wp-json/types/content/email';
    constructor(public http: Http) { }

    get(type: string,path: string) {
        return this.http.get(URL+type+path)
            .map(res => res.json());
    }
    postServices( data: any) {
        return this.http.post(this.url, data)
            .map(res => res.json());
    }


}
