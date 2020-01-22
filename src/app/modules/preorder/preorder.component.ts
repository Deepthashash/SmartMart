import { Component, OnInit } from '@angular/core';
// import { Preorder} from 'src/app/services/preorder.model';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
// import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.scss']
})
export class PreorderComponent implements OnInit {
  // details: Preorder[];
  brandName: String;
  public selectedComponent = 1;


  constructor(public dialog:MatDialog,private db:AngularFirestore,) { }
  // dataSource = this.details;
  ngOnInit() {
    // this.service.getPreOrders().subscribe(actionArray => {
    //   this.details = actionArray.map(item => {
    //     return{
    //       // barcodeNumber: item.payload.doc.id, 
    //       ...item.payload.doc.data()
    //     } as Preorder;
    //   })
    // })
  }

  

}
