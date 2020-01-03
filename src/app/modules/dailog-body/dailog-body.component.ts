import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dailog-body',
  templateUrl: './dailog-body.component.html',
  styleUrls: ['./dailog-body.component.scss']
})
export class DailogBodyComponent implements OnInit {

  constructor(private afs: AngularFirestore,) { }
  productsAddForm = new FormGroup({
    barcode: new FormControl(''),
    productName: new FormControl(''),
    unitPrice: new FormControl(''),  
  });
  
  onClick(formData){
     this.afs.doc('Barcode_details/'+formData.barcode).set({
        brand: formData.productName ,
        price: Number( formData.unitPrice )
     }).then( res => { 
       console.log('submitted');
     }, err=> {
       console.log(err);
     });
  }
  ngOnInit() {
  }

}
