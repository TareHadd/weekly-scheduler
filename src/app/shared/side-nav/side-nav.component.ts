import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() toggleCalendar = new EventEmitter<boolean>();

  toggle = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.toggle = !this.toggle
    this.toggleCalendar.emit(this.toggle);
  }

}
