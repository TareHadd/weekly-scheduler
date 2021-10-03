import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from '@angular/common'
import {Node} from '../models/thedata'

@Pipe({
  name: 'letsFixSomeThings'
})

export class DateTimePipe implements PipeTransform{

   transform(value: Node[], day, hour){
    //console.log(day)
    //console.log(hour)
    
    return value.filter(t => {
            let tdate = t.date.substring(0,10);
            let hours = formatDate(t.date, 'HH:mm', 'en');
            // console.log(tdate)
            // console.log(hours)
            // console.log(day)
            // console.log(hour)
        if( tdate === day && hours === hour){
            
            return t;
        }else{
            return null
        }
        })
    
       
   }

}