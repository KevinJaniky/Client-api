import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

const URL = "https://jsonplaceholder.typicode.com";

@Injectable()
export class ApiService{

    constructor(public http: Http){ }

    get(path: string){
        return this.http.get(URL+path)
            .map(res => res.json())
    }

}