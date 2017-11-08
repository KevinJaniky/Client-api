import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { ApiService } from '../shared/apiservices.module';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-ventes',
    templateUrl: 'ventes.component.html',
    styleUrls: ['ventes.component.css'],
    providers: [ApiService]
})
export class VentesComponent implements OnInit {

    newName: string = '';
    errorMessage: string;
    names: any[] = [];
    prestations: any[];
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
       this.api.get('/content','/prestations/per_page/6').subscribe((data) => this.prestations = data);
    }


}
