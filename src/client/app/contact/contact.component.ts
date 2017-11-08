import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { NameListService } from '../shared/name-list/name-list.service';
import { ApiService } from '../shared/apiservices.module';
import {Http} from "@angular/http";
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
export class ContactComponent implements OnInit{

  name = new FormControl();

  constructor() {

  }

  ngOnInit(){}


}
