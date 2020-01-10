import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Barcode } from 'src/app/services/product.module';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-promotions-dialog',
  templateUrl: './promotions-dialog.component.html',
  styleUrls: ['./promotions-dialog.component.scss']
})
export class PromotionsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Barcode,private service: ProductsService,private firestore: AngularFirestore, ) { 

  this.service.formData = Object.assign({},data);
  }

  ngOnInit() {
  }
  
  onUpdate(form: NgForm){
    let formdata = form.value;
    console.log(formdata.brand);
    this.firestore.doc('Barcode_details/'+formdata.barcode).update(formdata);
  }

}
