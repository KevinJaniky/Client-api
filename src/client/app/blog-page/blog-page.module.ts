import { NgModule } from '@angular/core';
import { BlogPageComponent } from './blog-page.component';
import { BlogPageRoutingModule } from './blog-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [BlogPageRoutingModule, SharedModule],
  declarations: [BlogPageComponent],
  exports: [BlogPageComponent],
  providers: [NameListService]
})
export class BlogPageModule { }
