import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { groupBy, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>('../../assets/data.json').pipe(
      map(
        res => {
           let node = res.data.appointments.nodes.sort(function (a, b) {
            var dateA = new Date(a.date).valueOf(), dateB = new Date(b.date).valueOf()
            return dateA - dateB
          });

           for(let n of node){
             n.date = n.date.substring(0, 16);
           }

           let groupped = this.groupBy(node, 'date');
           return groupped
         }
      )
    )
  }


  
  groupBy(arr, criteria) {
    const newObj = arr.reduce(function (acc, currentValue) {
      if (!acc[currentValue[criteria]]) {
        acc[currentValue[criteria]] = [];
      }
      acc[currentValue[criteria]].push(currentValue);
      return acc;
    }, []);
    return newObj;
  }

}
