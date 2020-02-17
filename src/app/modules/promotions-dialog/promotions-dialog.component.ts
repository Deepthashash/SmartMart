import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { PromoService } from 'src/app/services/promo.service';
import { Promo } from 'src/app/services/promo.model';
import { FormsModule }   from '@angular/forms';


import * as _ from "lodash";
import { Upload } from 'src/app/services/upload';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-promotions-dialog',
  templateUrl: './promotions-dialog.component.html',
  styleUrls: ['./promotions-dialog.component.scss']
})
export class PromotionsDialogComponent implements OnInit {
  sDate: number;
  eDate: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Promo,private service: PromoService,private firestore: AngularFirestore,private upSvc: UploadService ) { 

  this.service.formData = Object.assign({},data);
  }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
    let formdata = form.value; 
    this.sDate = new Date(formdata.startDate).getTime();
    // localStorage.setItem('startDate',this.sDate);
    this.eDate = new Date(formdata.endDate).getTime();
    // localStorage.setItem('endDate',this.eDate);
    // console.log(this.eDate);
    localStorage.setItem('barcode',formdata.barcode);
    // localStorage.setItem('price',formdata.price);
    // this.firestore.doc('Barcode_details/'+formdata.barcode).update(formdata);
    this.firestore.doc('Promotions/'+formdata.barcode).set({
      barcode: formdata.barcode,
      brand: formdata.brand,
      price: Number( formdata.price),
      startDate: this.sDate,
      endDate: this.eDate,
      status: "pending",
      initialPrice: formdata.price
   }).then( res => { 
     console.log('submitted');
   }, err=> {
     console.log(err);
   });
  //  this.toastr.success("Succesfully Submitted!");
  }

  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
  }



}


