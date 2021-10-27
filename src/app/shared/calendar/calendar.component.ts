import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  
  model = this.calendar.getToday()
  date: {year: number, month: number};


  constructor(private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) { }

  ngOnInit(): void {
  }

  getDay(something){
    // this.sendDay.emit(something)
  }

}
