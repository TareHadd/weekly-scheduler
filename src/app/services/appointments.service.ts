import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Data } from '../models/thedata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<Data>('../../assets/data.json').pipe(
      map(
        res => {
          return res.data.appointments.nodes
         }
      )
    )
  }
}
