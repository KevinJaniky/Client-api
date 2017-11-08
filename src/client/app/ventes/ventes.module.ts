import { NgModule } from '@angular/core';
import { VentesComponent } from './ventes.component';
import { VentesRoutingModule } from './ventes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [VentesRoutingModule, SharedModule],
  declarations: [VentesComponent],
  exports: [VentesComponent],
  providers: [NameListService]
})
export class VentesModule { }
