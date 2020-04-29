import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../Serie';

@Component({
  selector: 'app-listarDetalle',
  templateUrl: './listarDetalle.component.html',
  styleUrls: ['./listarDetalle.component.css']
})
export class ListarDetalleComponent implements OnInit {

  @Input() detalle : Serie;
  constructor() { }

  ngOnInit() {
  }

}
