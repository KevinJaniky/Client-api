import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [CommonModule, ContactRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [ContactComponent],
    exports: [ContactComponent],
    bootstrap : [ContactComponent]
})
export class ContactModule {
}

platformBrowserDynamic().bootstrapModule(ContactModule);
