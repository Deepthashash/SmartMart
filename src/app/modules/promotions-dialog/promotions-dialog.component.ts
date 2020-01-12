import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { PromoService } from 'src/app/services/promo.service';
import { Promo } from 'src/app/services/promo.model';

import * as _ from "lodash";
import { Upload } from 'src/app/services/upload';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-promotions-dialog',
  templateUrl: './promotions-dialog.component.html',
  styleUrls: ['./promotions-dialog.component.scss']
})
export class PromotionsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Promo,private service: PromoService,private firestore: AngularFirestore,private upSvc: UploadService ) { 

  this.service.formData = Object.assign({},data);
  }

  ngOnInit() {
  }
  
  onUpdate(form: NgForm){
    let formdata = form.value;
    console.log(formdata.brand);
    this.firestore.doc('Barcode_details/'+formdata.barcode).update(formdata);
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


