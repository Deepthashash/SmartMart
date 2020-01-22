import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public childEvent =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public fireEvent2(x: number){
    this.childEvent.emit(x);
  }

}
