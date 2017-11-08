import { Component ,OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { ApiService } from '../shared/apiservices.module';
import {Http} from "@angular/http";
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  providers: [ApiService]
})
export class AboutComponent implements OnInit{

  abouts: any = [];
  constructor(public api: ApiService){}

  ngOnInit() {
    //this.api.get('/prestations?per_page=6').subscribe((data) => this.prestations = data);
    //this.api.get('/posts?per_page=6').subscribe((data) => this.articles = data);
    this.api.get('/content','/about').subscribe((data) => this.abouts = data);
  }

}
