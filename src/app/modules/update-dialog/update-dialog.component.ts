import { Component, OnInit, Input, Inject, SystemJsNgModuleLoader } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Barcode } from 'src/app/services/product.module';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Barcode,private service: ProductsService,private firestore: AngularFirestore, private toastr: ToastrService) { 

    this.service.formData = Object.assign({},data);
     
  }
   

  
  ngOnInit() {
  }

  onUpdate(form: NgForm){
    let formdata = form.value;
    console.log(formdata.price);
    this.firestore.doc('Barcode_details/'+this.service.formData.barcodeNumber).update({
      price: formdata.price,
      stock: formdata.stock,
      reOrderLevel: formdata.reOrderLevel
    });
    this.toastr.success("Succesfully Submitted!")
  }

}
