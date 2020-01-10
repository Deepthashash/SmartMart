import { Component, OnInit } from '@angular/core';
import { Barcode } from 'src/app/services/product.module';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PromotionsDialogComponent } from '../promotions-dialog/promotions-dialog.component';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  details: Barcode[];
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService) {}
  
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
    this.dialog.open(PromotionsDialogComponent);
  }
  
  openUpdateDialog(details:Barcode){
    // console.log(details);
    this.dialog.open(UpdateDialogComponent,{
      data: details,
    });
  }

  onDelete(id:any){
    if(confirm("Are you sure, you want to delete this?")){
      this.db.doc('Barcode_details/'+id).delete();
    }
  }

}
