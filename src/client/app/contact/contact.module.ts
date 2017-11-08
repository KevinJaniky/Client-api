import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import {FormGroup} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
