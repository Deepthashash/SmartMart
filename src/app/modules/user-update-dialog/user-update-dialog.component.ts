import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ProductsService } from 'src/app/services/products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { OtherUsers } from 'src/app/services/user.module';
 

@Component({
  selector: 'app-user-update-dialog',
  templateUrl: './user-update-dialog.component.html',
  styleUrls: ['./user-update-dialog.component.scss']
})
export class UserUpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: OtherUsers,private service: ProductsService,private firestore: AngularFirestore, ) {
  
    this.service.formother = Object.assign({},data);
   }

  ngOnInit() {
  }

  onUpdate(form: NgForm){
    let formother = form.value;
    console.log(formother.brand);
    this.firestore.doc('OtherUsers/'+formother.userName).update(formother);
  }

}
