import { Component, OnInit } from '@angular/core';
import { Node } from '../models/thedata'
import { addDays, eachDayOfInterval, endOfWeek, format, startOfWeek, subDays } from 'date-fns';
import { AppointmentsService } from '../services/appointments.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
})
export class SchedulerComponent implements OnInit {
  
   date = new Date();
  startOfWeek!: any;
  endOfWeek!: any;
  weekdaysFormated: any[] = [];
  hours:any[] = []
  // Starting point

  weekdays: any[] = [];

  nodeDate: Node[] = []

  // datepicker day
  datepickerDate!:any
  
  constructor(
    private service: AppointmentsService,
    private modalService: NgbModal){

    }

  
  ngOnInit(): void {

    
    this.service.getData().subscribe(
      res=>{
        this.nodeDate = res
      }
    )

    this.showWeek(this.date); //call because we have putted format app in init
    this.getHours();
    
  }

  // Using date-fns functions for getting only week
  showWeek(date) {
    this.startOfWeek = startOfWeek(date);
    this.endOfWeek = endOfWeek(date);
    this.weekdays = eachDayOfInterval({
      start: this.startOfWeek,
      end: this.endOfWeek,
    }).map((element) => {
      const dayFormat = format(element, 'dd E');
      const monthDayFormat = format(element, 'Y-MM-dd');
      return { dayFormat, monthDayFormat };
    });
  }


  // Function for getting hours from 8:00 to 20:00
  getHours(){
    let hour!:any
    for(let i = 8; i <= 20; i++){
      if(i < 10){
        hour = '0'+i+':00'
      }
      if(i >= 10){
        hour = i+':00'
      }
      this.hours.push(hour)
    }
  }


  // Function for getting next and previous week
  nextWeek() {
    this.date = addDays(this.date, 7);
    this.showWeek(this.date);
    console.log(this.startOfWeek, this.endOfWeek);
  }

  previousWeek() {
    this.date = subDays(this.date, 7);
    this.showWeek(this.date);
    console.log(this.startOfWeek, this.endOfWeek);
  }


 
  // modal open f
  openModal(content) {
    this.modalService.open(content, { centered: true })
  }

  // get day from datepicker

  getDay(date){
    // console.log(date)
    let year = date.year;
    let month = date.month
    let day = date.day
    let newDate = new Date(date.year, date.month-1, date.day)
    
    // console.log(year)
    // console.log(month)
    // console.log(day)
    // console.log('____________________ date from datepicker:')
    // console.log(newDate)
    // console.log('____________________ start of week:')
    // console.log(startOfWeek(newDate))
    // console.log('____________________ end of week:')
    // console.log(endOfWeek(newDate))
    // console.log('____________________')
    // console.log(startOfWeek(this.date))

    this.showWeek(newDate)
    
  }
  
}
