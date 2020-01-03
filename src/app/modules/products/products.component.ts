import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { Barcode } from 'src/app/services/product.module';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  details: Barcode[];
  constructor(public dialog:MatDialog, db:AngularFirestore, private service: ProductsService) {}
  
  dataSource = this.details;  
  ngOnInit() {
    this.service.getProductDetails().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          barcodeNumber: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as Barcode;
      })
    })
  }

  openDialog(){
    this.dialog.open(DailogBodyComponent);
  }
  

}
