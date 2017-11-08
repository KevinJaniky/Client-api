import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {NameListService} from '../shared/name-list/name-list.service';
import {ApiService} from '../shared/apiservices.module';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css'],
    providers: [ApiService]
})
export class ContactComponent {
    reponse: any ;
    donnee: any;
    constructor(public api: ApiService) {
    }
    registerUser(form: NgForm) {
        console.log(form.value);
        this.donnee = {obj : 'test', email : 'myemail', msg : 'msg'};
        this.api.postServices(this.donnee).subscribe((data) => this.reponse = data, error => console.log(error));
    }
}