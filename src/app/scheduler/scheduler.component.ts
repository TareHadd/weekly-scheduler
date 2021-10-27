import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { addDays, eachDayOfInterval, endOfWeek, startOfWeek, subDays } from 'date-fns';
import { AppointmentsService } from '../core/services/appointments.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  constructor(private service:AppointmentsService,private modalService: NgbModal) { }

  appointments = [];
  data = []
  indexes = [];
  dateVal:string;
  index:number;

  date = new Date();
  startOfWeek:any;
  endOfWeek:any;
  weekdays:any;

  days = [];
  hours = [];

  rightArrowStatus = false;
  leftArrowStatus = false;

  toggleCalendar: boolean = true;

  nextStatus = false;

  ngOnInit(): void {
    this.service.getData().subscribe(

      resData => {
        this.appointments = resData;

        this.getArrayOfIndexes();
        this.getDayTime();

        this.nextStatus = true;
      }

    )

  }

  getDayTime(){

    let hour;

    for (let i = 8; i <= 20; i++) {
      if (i < 10) {
        hour = '0' + i + ':00';
      }
      if (i >= 10) {
        hour = i + ':00';
      }
      this.hours.push(hour);
    }

    this.startOfWeek = startOfWeek(this.date);
    this.endOfWeek = endOfWeek(this.date);

    this.weekdays = eachDayOfInterval({
      start: this.startOfWeek,
      end: this.endOfWeek,
    });


  }

  open(content, day ,hour) {

    let correctedDay = formatDate(day, 'Y-MM-dd', 'en');
    this.dateVal = correctedDay+'T'+hour;

    this.data = this.appointments[this.dateVal];
    this.index = this.indexes.indexOf(this.dateVal);

    if ( this.index === this.indexes.length - 1){
      this.rightArrowStatus = true;
      this.leftArrowStatus = false
    }else
    {
      this.rightArrowStatus = false;
    }

    if ( this.index === 0){
      this.leftArrowStatus = true;
      this.rightArrowStatus = false
    }else
    {
      this.leftArrowStatus = false;
    }

    this.modalService.open(content, { centered: true });

  }

  nextAppointments(day, hour){
    this.data = [];
    this.index++;
    
    this.data = this.appointments[this.indexes[this.index]];

    if ( this.index === this.indexes.length-1){
      this.leftArrowStatus = false;
      this.rightArrowStatus = true;
    }




  }

  previousAppointments(value){

    if ( this.index === 1){
      this.leftArrowStatus = true;
      this.rightArrowStatus = false;
    }

    this.data = [];
    this.index--;
    this.data = this.appointments[this.indexes[this.index]];

  }

  nextWeek(){
    this.hours = []
    this.date = addDays(this.date, 7);
    this.getDayTime();
  }

  previousWeek(){

    this.hours = []
    this.date = subDays(this.date, 7);
    this.getDayTime();
  }
  
  getArrayOfIndexes(){

    for(let index in this.appointments){
      this.indexes.push(index);
    }

  }

  toggleCalendarFunc(status){
    this.toggleCalendar = status;
    console.log(status);
  }



}
