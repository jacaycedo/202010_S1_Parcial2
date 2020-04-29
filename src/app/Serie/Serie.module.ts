import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './Serie.component';
import {ListarDetalleComponent} from './listarDetalle/listarDetalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent, ListarDetalleComponent],
  exports:[SerieComponent]
})
export class SerieModule { }
