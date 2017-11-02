import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const URL = "http://localhost/api/wp-json/wp/v2";

@Injectable()
export class ApiService{

    constructor(public http: Http){ }

    get(path: string){
        return this.http.get(URL+path)
            .map(res => res.json())
    }

}