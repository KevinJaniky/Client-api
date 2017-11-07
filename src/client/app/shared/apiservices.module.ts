import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const URL = 'http://localhost/api/wp-json/types';

@Injectable()
export class ApiService {

    constructor(public http: Http) { }

    get(type: string,path: string) {
        return this.http.get(URL+type+path)
            .map(res => res.json());
    }
}
