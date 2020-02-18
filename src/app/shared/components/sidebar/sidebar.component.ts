import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Barcode } from 'src/app/services/product.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() public childEvent =  new EventEmitter();
  constructor(private firestore: AngularFirestore ) { }

   arr = [] as Array<String>;

   tempBarcodeDetail = {} as Barcode;

  ngOnInit() {

    this.firestore.collection('Barcode_details').snapshotChanges().subscribe(actionArray => {
      actionArray.map(item => {
        this.tempBarcodeDetail = item.payload.doc.data() as Barcode;
        if(this.tempBarcodeDetail.reOrderLevel > this.tempBarcodeDetail.stock ){
          if(!this.arr.includes(this.tempBarcodeDetail.brand)){
            this.arr.push(this.tempBarcodeDetail.brand);
          }
        } else {
          if(this.arr.includes(this.tempBarcodeDetail.brand)){
            this.arr.splice(this.arr.indexOf(this.tempBarcodeDetail.brand),1);
          }
        }
      })
      console.log(this.arr);
    });
     
  }

  

  public fireEvent(x: number){
    this.childEvent.emit(x);
  }


  
}
