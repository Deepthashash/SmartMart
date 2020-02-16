import { Component, OnInit } from '@angular/core';
//import { Barcode } from 'src/app/services/product.module';
 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { Users } from 'src/app/services/users.model';
import { ProductsService } from 'src/app/services/products.service';
import { UsersDialogComponent } from 'src/app/modules/users-dialog/users-dialog.component';
 

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  details: Users[];
  constructor(public dialog:MatDialog,private db:AngularFirestore, private service: ProductsService) {}
 
  dataSource = this.details;  
  ngOnInit() {
    this.service.getUserDetails().subscribe(actionArray => {
      this.details = actionArray.map(item => {
        return{
          email: item.payload.doc.id, 
          ...item.payload.doc.data()
        } as Users;
      })
    })
  }

   
  
   

  onDelete(id:any){
    if(confirm("Are you sure, you want to delete this?")){
      this.db.doc('Barcode_details/'+id).delete();
    }
  }
}
