import { Component, OnInit } from '@angular/core';
import { PreOrders } from 'src/app/services/preOrders.model';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-accepted-preorders',
  templateUrl: './accepted-preorders.component.html',
  styleUrls: ['./accepted-preorders.component.scss']
})
export class AcceptedPreordersComponent implements OnInit {

  details: PreOrders[];
  brandName: String;
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService) {}
  
   dataSource = this.details;  
  ngOnInit() {
    this.service.getCompletedPreOrders().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          docId: item.payload.doc.id, 
          ...item.payload.doc.data(),
        } as PreOrders;
      })
    })
  }

  onComplete(id){
    this.db.doc("PreOrders/"+id).update({"completed": true})
  }

}
