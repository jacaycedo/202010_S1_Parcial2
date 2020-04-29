import { Component, OnInit } from '@angular/core';
import { ListarSeriesService } from './listarSeries.service';
import { Serie } from './Serie';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: ListarSeriesService) { }

  public series: Array<Serie>;
  public promedio: number;
  selected = false;
  serieDetalle: Serie;

  getSeriesList(){
    this.serieService.getSeries().subscribe((cd: Array<Serie>) =>{
      this.series=cd;
      var cantidad = 0;
      var total =0;
      for(let s of cd)
      {
        total+=(s.seasons);
        cantidad++;
      }
      this.promedio = (total/cantidad)
    })
  }

  onSelected(b:Serie)
  {
    this.selected = true;
    this.serieDetalle = b;
  }
  ngOnInit() {
    this.series = new Array<Serie>();
    this.getSeriesList();
  }

}
