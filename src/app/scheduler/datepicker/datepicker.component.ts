import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor(private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {
  }

  ngOnInit(): void {
    console.log()
  }

  model = this.calendar.getToday()
  date: {year: number, month: number};


  
  
}
