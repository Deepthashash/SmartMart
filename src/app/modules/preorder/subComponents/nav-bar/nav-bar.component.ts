import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public childEvent =  new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public fireEvent2(x: number){
    this.childEvent.emit(x);
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
