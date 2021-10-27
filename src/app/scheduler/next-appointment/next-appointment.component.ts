import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-appointment',
  templateUrl: './next-appointment.component.html',
  styleUrls: ['./next-appointment.component.scss']
})
export class NextAppointmentComponent implements OnInit {

  @Input() appointments: any[];
  date = new Date();
  futureAppointments = [];
  nextAppointment:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.appointments)
    for(let app in this.appointments){
      if( new Date().getTime() < new Date(app).getTime()){
        this.futureAppointments.push(this.appointments[app])
      }
    }

    this.nextAppointment = this.futureAppointments[0]

    console.log(this.nextAppointment)
  }

}
