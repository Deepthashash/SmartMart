import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() public childEvent =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public fireEvent(x: number){
    this.childEvent.emit(x);
  }

}
