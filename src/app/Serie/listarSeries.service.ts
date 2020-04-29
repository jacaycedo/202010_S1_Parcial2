import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import {Serie} from './Serie';
@Injectable({
  providedIn: 'root'
})
export class ListarSeriesService {
private apiUrl = environment.baseurl;
constructor(private http: HttpClient) { }

getSeries():Observable<Serie[]>{
  return this.http.get<Serie[]>(this.apiUrl);
}
}
