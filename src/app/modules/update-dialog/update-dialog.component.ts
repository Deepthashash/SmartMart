import { Component, OnInit, Input, Inject, SystemJsNgModuleLoader } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Barcode } from 'src/app/services/product.module';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

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
