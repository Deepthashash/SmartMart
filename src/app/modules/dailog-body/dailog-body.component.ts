import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dailog-body',
  templateUrl: './dailog-body.component.html',
  styleUrls: ['./dailog-body.component.scss']
})
export class DailogBodyComponent implements OnInit {

  constructor(private afs: AngularFirestore,private toastr: ToastrService) { }
  productsAddForm = new FormGroup({
    barcode: new FormControl('',Validators.required),
    productName: new FormControl('',Validators.required,),
    unitPrice: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    reOrderLevel: new FormControl('',Validators.required)
  });
  
  onClick(formData){
     this.afs.doc('Barcode_details/'+formData.barcode).set({
        barcode: formData.barcode,
        brand: formData.productName ,
        price: Number( formData.unitPrice),
        stock: Number( formData.stock),
        reOrderLevel: Number( formData.reOrderLevel),
     }).then( res => { 
       console.log('submitted');
     }, err=> {
       console.log(err);
     });
     this.toastr.success("Succesfully Submitted!");
  }
  ngOnInit() {
  }

  

}
