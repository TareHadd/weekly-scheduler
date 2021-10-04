import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbCalendar, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Output() sendDay = new EventEmitter<any>()
  day!:any

  constructor(private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {
  }

  ngOnInit(): void {
  }

  model = this.calendar.getToday()
  date: {year: number, month: number};


  getDay(something){
    this.sendDay.emit(something)
  }
  
  
}
