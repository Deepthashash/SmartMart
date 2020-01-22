import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PreOrders } from 'src/app/services/preOrders.model';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  details: [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: PreOrders,private service: ProductsService,private firestore: AngularFirestore, ) { 

    this.service.formPre = Object.assign({},data);
    console.log(service.formPre.BillAmount);
  }

  ngOnInit() {
  }

  accept(id){

    this.firestore.doc('PreOrders/'+id).update({ "pending": 1});
  }

}
