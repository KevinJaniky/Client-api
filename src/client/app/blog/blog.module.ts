import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [BlogRoutingModule, SharedModule],
  declarations: [BlogComponent],
  exports: [BlogComponent],
  providers: [NameListService]
})
export class BlogModule { }
