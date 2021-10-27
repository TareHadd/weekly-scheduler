import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { NextAppointmentComponent } from './scheduler/next-appointment/next-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    SideNavComponent,
    CalendarComponent,
    NextAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
