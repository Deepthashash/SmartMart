import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PreOrders } from 'src/app/services/preOrders.model';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { Feedback } from 'src/app/services/feedback.model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pending-preorders',
  templateUrl: './pending-preorders.component.html',
  styleUrls: ['./pending-preorders.component.scss']
})
export class PendingPreordersComponent implements OnInit {

  details: PreOrders[];
  brandName: String;
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService) {}
  
  // dataSource = this.details;  
  ngOnInit() {
    this.service.getpreOrders().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          docId: item.payload.doc.id, 
          ...item.payload.doc.data(),
        } as PreOrders;
      })
    })
  }

  onTap(data:PreOrders){
    // console.log(details);
    this.dialog.open(DialogComponent,{
      data: data,
    });
  }

  onComplete(id){
    this.db.doc("PreOrders/"+id).update({"completed": true})
  }

}
