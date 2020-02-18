import { Component, OnInit } from '@angular/core';
import { Barcode } from 'src/app/services/product.module';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from 'src/app/services/products.service';
import { DailogBodyComponent } from '../dailog-body/dailog-body.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { PromotionsDialogComponent } from '../promotions-dialog/promotions-dialog.component';
import { PromoService } from 'src/app/services/promo.service';
import { Promo } from 'src/app/services/promo.model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  details: Promo[];
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: PromoService) {}
  
  dataSource = this.details;  
  ngOnInit() {
    this.service.getPromo().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          // barcodeNumber: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as Promo;
      })
    })
  }

  // openDialog(){
  //   this.dialog.open(PromotionsDialogComponent);
  // }
  
  openUpdateDialog(details:Barcode){
    // console.log(details);
    this.dialog.open(UpdateDialogComponent,{
      data: details,
    });
  }

  onDelete(fdata){
    let formdata = fdata.value;
    if(confirm("Are you sure, you want to delete this?")){
      this.db.doc("Barcode_details/"+fdata.barcode).update({
        price: fdata.initialPrice,
      })
      this.db.doc('Promotions/'+fdata.barcode).delete();
    }
  }

}
