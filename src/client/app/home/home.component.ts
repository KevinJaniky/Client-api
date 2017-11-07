import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { ApiService } from '../shared/apiservices.module';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [ApiService]
})
export class HomeComponent implements OnInit {

    newName: string = '';
    errorMessage: string;
    names: any[] = [];
    prestations: any[];
    articles: any[];

    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(public nameListService: NameListService, public api: ApiService) {
    }

    /**
     * Get the names OnInit
     */
    ngOnInit() {
        //this.api.get('/prestations?per_page=6').subscribe((data) => this.prestations = data);
        //this.api.get('/posts?per_page=6').subscribe((data) => this.articles = data);
        this.api.get('/content','/about').subscribe((data) => this.articles = data);
    }


}
