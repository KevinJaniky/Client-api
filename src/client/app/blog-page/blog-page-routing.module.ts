import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BlogPageComponent} from './blog-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'blog/:id',
                component: BlogPageComponent,
            }
        ])
    ],
    exports: [RouterModule]
})
export class BlogPageRoutingModule {
}
