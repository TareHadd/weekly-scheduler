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

  weekdays: any[] = [];
  data = []

  nodeDate: Node[] = []
  
  constructor(
    private service: AppointmentsService,
    private modalService: NgbModal){}

  ngOnInit(): void {

    
    this.service.getData().subscribe(
      res=>{
        this.formatApp(res)
      }
    )
    
  }

  showWeek() {
    this.startOfWeek = startOfWeek(this.date);
    this.endOfWeek = endOfWeek(this.date);
    this.weekdays = eachDayOfInterval({
      start: this.startOfWeek,
      end: this.endOfWeek,
    }).map((element) => {
      const dayFormat = format(element, 'dd E');
      const monthDayFormat = format(element, 'Y-MM-dd');
      return { dayFormat, monthDayFormat };
    });
  }


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


  nextWeek() {
    this.date = addDays(this.date, 7);
    this.showWeek();
    console.log(this.startOfWeek, this.endOfWeek);
  }

  previousWeek() {
    this.date = subDays(this.date, 7);
    this.showWeek();
    console.log(this.startOfWeek, this.endOfWeek);
  }

  formatApp(content: any[]){
    for(let a of content){
      this.nodeDate.push(a)
    }
    this.showWeek();
    this.getHours();
  }

  open(content, node) {
    this.modalService.open(content, node)
  }
}
