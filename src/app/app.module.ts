import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatepickerComponent } from './scheduler/datepicker/datepicker.component';

import { FormsModule } from '@angular/forms';
import { DateTimePipe } from './pipe/dateTimePipe';
import { AppointmentModalComponent } from './scheduler/appointment-modal/appointment-modal.component'



@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    DatepickerComponent,
    DateTimePipe,
    AppointmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
