import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VentesComponent } from './ventes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ventes', component: VentesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class VentesRoutingModule { }
