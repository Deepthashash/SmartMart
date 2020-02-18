import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  public selectedComponent = 1;



  constructor() { }

  ngOnInit() { 
    
    //  firebase.firestore().collection('Barcode_details').where('reOrderLevel', '>', 'stock').get().then( array=>{
    //   console.log('dvdfv');
    //   console.log(array); 
    //   array.forEach(element => {
    //      console.log(element.data());
    //    });
    //  });
   }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
