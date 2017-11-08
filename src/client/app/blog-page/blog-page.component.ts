import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { ApiService } from '../shared/apiservices.module';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-blog-page',
    templateUrl: 'blog-page.component.html',
    styleUrls: ['blog-page.component.css'],
    providers: [ApiService]
})
export class BlogPageComponent implements OnInit {

    newName: string = '';
    errorMessage: string;
    names: any[] = [];
    articles: any[];
    path: string;
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(
        public nameListService: NameListService,
        public api: ApiService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    /**
     * Get the names OnInit
     */
    ngOnInit() {
        //this.api.get('/prestations?per_page=6').subscribe((data) => this.prestations = data);
        //this.api.get('/posts?per_page=6').subscribe((data) => this.articles = data);
        const id = +this.route.snapshot.paramMap.get('id');
        this.path = '/articles/'+id+'/';


        this.api.get('/content',this.path).subscribe((data) => this.articles = data);
    }


}
